import { useCallback } from 'react'

import useSushi from './useSushi'
import { useWallet } from 'use-wallet'

import { swap, getSwapContract } from '../sushi/utils'

const useSwap = () => {
  const { account } = useWallet()
  const sushi = useSushi()

  const handleSwap = useCallback(
    async (amount: string) => {
      const txHash = await swap(
        getSwapContract(sushi),
        amount,
        account,
      )
      console.log(txHash)
    },
    [account, sushi],
  )

  return { onSwap: handleSwap }
}

export default useSwap
