import useBlock from './useBlock'

const useCurrentReward = () => {
  const block = useBlock()
  let reward = 0
  if (block < 11009000) {
    reward = 0
  } else if (block >= 11452585 && block < 11485919) {
    reward = 15
  } else {
    reward = 0
  }

  return reward
}

export default useCurrentReward
