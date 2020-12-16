import React from 'react'
import useModal from '../../hooks/useModal'

import wpp from '../../assets/img/wpp.png'
import Page from '../../components/Page'
import PageHeader from '../../components/PageHeader'
import Stake from './components/Stake'
import { useWallet } from 'use-wallet'
import Button from '../../components/Button'
import WalletProviderModal from '../../components/WalletProviderModal'

const Swap: React.FC = () => {
  const { account } = useWallet()
  const [onPresentWalletProviderModal] = useModal(<WalletProviderModal />)

  return (
    <Page>
      {!!account ? (
        <div>
          <PageHeader
            icon={<img src={wpp} height={120} />}
            // title="Swap Old WPP to New WPP"
            subtitle="Stake New wpp on uniswap to get the LP token and stake on Hyfi!"
          />

          <Stake tokenName="WPP-V1" />
        </div>
      ) : (
        <div
          style={{
            alignItems: 'center',
            display: 'flex',
            flex: 1,
            justifyContent: 'center',
          }}
        >
          <Button
            onClick={onPresentWalletProviderModal}
            text="🔓 Unlock Wallet"
          />
        </div>
      )}
    </Page>
  )
}

export default Swap
