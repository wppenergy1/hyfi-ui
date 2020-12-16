import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import { Contract } from 'web3-eth-contract'
import Button from '../../../components/Button'
import Card from '../../../components/Card'
import CardContent from '../../../components/CardContent'
import IconButton from '../../../components/IconButton'
import { AddIcon } from '../../../components/icons'
import useAllowance from '../../../hooks/useAllowance'
import useApprove from '../../../hooks/useApprove'
import useModal from '../../../hooks/useModal'
import useSushi from '../../../hooks/useSushi'
import useTokenBalance from '../../../hooks/useTokenBalance'
import useSwap from '../../../hooks/useSwap'
import SwapModal from './SwapModal'
import { getSwapContract, getOldTokenContract } from '../../../sushi/utils'

interface StakeProps {
  tokenName: string
}

const Stake: React.FC<StakeProps> = ({ tokenName }) => {
  const [requestedApproval, setRequestedApproval] = useState(false)

  const sushi = useSushi()
  const swapContract = getSwapContract(sushi)
  const lpContract = getOldTokenContract(sushi)
  const allowance = useAllowance(lpContract, swapContract)
  const { onApprove } = useApprove(lpContract, swapContract)


  const { onSwap } = useSwap()
  const tokenBalance = useTokenBalance(lpContract)

  const [onPresentDeposit] = useModal(
    <SwapModal max={allowance} onConfirm={onSwap} tokenName={tokenName} />,
  )

  const handleApprove = useCallback(async () => {
    try {
      setRequestedApproval(true)
      const txHash = await onApprove()
      // user rejected tx or didn't go thru
      if (!txHash) {
        setRequestedApproval(false)
      }
    } catch (e) {
      console.log(e)
    }
  }, [onApprove, setRequestedApproval])

  return (
    <Card>
      <CardContent>
        <StyledCardContentInner>
          {/* <StyledCardHeader>
            <CardIcon>💰</CardIcon>
            <Value value={getBalanceNumber(stakedBalance)} />
            <Label text={`${tokenName} Tokens Staked`} />
          </StyledCardHeader> */}
          <StyledCardActions>
            {!allowance.toNumber() ? (
              <Button
                disabled={requestedApproval}
                onClick={handleApprove}
                text={`Approve ${tokenName}`}
              />
            ) : (
              <>
                <StyledActionSpacer />
                <Button onClick={onPresentDeposit}>
                  <AddIcon />
                </Button>
              </>
            )}
          </StyledCardActions>
        </StyledCardContentInner>
      </CardContent>
    </Card>
  )
}

const StyledCardHeader = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`
const StyledCardActions = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${(props) => props.theme.spacing[6]}px;
  width: 100%;
`

const StyledActionSpacer = styled.div`
  height: ${(props) => props.theme.spacing[4]}px;
  width: ${(props) => props.theme.spacing[4]}px;
`

const StyledCardContentInner = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
`

export default Stake
