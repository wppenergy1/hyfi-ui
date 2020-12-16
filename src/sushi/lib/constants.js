import BigNumber from 'bignumber.js/bignumber'

export const SUBTRACT_GAS_LIMIT = 100000

const ONE_MINUTE_IN_SECONDS = new BigNumber(60)
const ONE_HOUR_IN_SECONDS = ONE_MINUTE_IN_SECONDS.times(60)
const ONE_DAY_IN_SECONDS = ONE_HOUR_IN_SECONDS.times(24)
const ONE_YEAR_IN_SECONDS = ONE_DAY_IN_SECONDS.times(365)

export const INTEGERS = {
  ONE_MINUTE_IN_SECONDS,
  ONE_HOUR_IN_SECONDS,
  ONE_DAY_IN_SECONDS,
  ONE_YEAR_IN_SECONDS,
  ZERO: new BigNumber(0),
  ONE: new BigNumber(1),
  ONES_31: new BigNumber('4294967295'), // 2**32-1
  ONES_127: new BigNumber('340282366920938463463374607431768211455'), // 2**128-1
  ONES_255: new BigNumber(
    '115792089237316195423570985008687907853269984665640564039457584007913129639935',
  ), // 2**256-1
  INTEREST_RATE_BASE: new BigNumber('1e18'),
}

export const addressMap = {
  uniswapFactory: '0x9c83dCE8CA20E9aAF9D3efc003b2ea62aBC08351',
  uniswapFactoryV2: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
  YFI: '0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e',
  YCRV: '0xdF5e0e81Dff6FAF3A7e52BA697820c5e32D806A8',
  UNIAmpl: '0xc5be99a02c6857f9eac67bbce58df5572498f40c',
  WETH: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
  UNIRouter: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D',
  LINK: '0x514910771AF9Ca656af840dff83E8264EcF986CA',
  MKR: '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2',
  SNX: '0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F',
  COMP: '0xc00e94Cb662C3520282E6f5717214004A7f26888',
  LEND: '0x80fB784B7eD66730e8b1DBd9820aFD29931aab03',
  SUSHIYCRV: '0x2C7a51A357d5739C5C74Bf3C96816849d2c9F726',
}

export const contractAddresses = {
  sushi: {
    1: '0x3b74fC995685877028e1b78b185415fc8A86A1e7',
    3: '0x128Ff926eF9Ece2826455b0312eD802D256E3bA7',
  },
  masterChef: {
    1: '0xBd38C0F2c9cB7Be863BD8bAD30babd02DF398595',
    3: '0xD8760d1D8Bfda48a91C46926b6646172e1D68341',
  },
  weth: {
    1: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
    3: '0xc778417e063141139fce010982780140aa0cd5ab',
  },
  swap: {
    1: '0x070Dd12f34DFB926fc5e460e6a5fd9EE530486E6',
    3: '0x139C3C1738bD16Bdb87524b3859877c8e9dCFB7b',
  },
  wppone: {
    1: '0x056dd20b01799e9c1952c7c9a5ff4409a6110085',
    3: '0xd616B836339E1d9dF0984709d43336933A4028F5',
  },
}

/*
UNI-V2 LP Address on mainnet for reference
==========================================
0  USDT 0x0d4a11d5eeaac28ec3f61d100daf4d40471f1852
1  USDC 0xb4e16d0168e52d35cacd2c6185b44281ec28c9dc
2  DAI  0xa478c2975ab1ea89e8196811f51a7b7ade33eb11
3  sUSD 0xf80758ab42c3b07da84053fd88804bcb6baa4b5c
4  COMP 0xcffdded873554f362ac02f8fb1f02e5ada10516f
5  LEND 0xab3f9bf1d81ddb224a2014e98b238638824bcf20
6  SNX  0x43ae24960e5534731fc831386c07755a2dc33d47
7  UMA  0x88d97d199b9ed37c29d846d00d443de980832a22
8  LINK 0xa2107fa5b38d9bbd2c461d6edf11b11a50f6b974
9  BAND 0xf421c3f2e695c2d4c0765379ccace8ade4a480d9
10 AMPL 0xc5be99a02c6857f9eac67bbce58df5572498f40c
11 YFI  0x2fdbadf3c4d5a8666bc06645b8358ab803996e28
12 SUSHI 0xce84867c3c02b05dc570d0135103d3fb9cc19433
*/

export const supportedPools = [
  {
    pid: 0,
    lpAddresses: {
      1: '0x4361966d6b6137544878698eba84b73bd1832f5f',
      3: '0xFD619BC76720eFefe8745c62176926ed0D6011Da',
    },
    tokenAddresses: {
      1: '0x1955d744f9435522be508d1ba60e3c12d0690b6a',
      3: '0xd37776fE6dACF581edCD49fCA75477ffc41D430E',
    },
    name: 'HYFI Party!',
    symbol: 'WPP-ETH UNI-V2 LP',
    tokenSymbol: 'WPP',
    icon: '💰',
  },
  {
    pid: 1,
    lpAddresses: {
      1: '0x61d1bed11d0bc5af52b96ca623b507ddd85dccc1',
    },
    tokenAddresses: {
      1: '0x1955d744f9435522be508d1ba60e3c12d0690b6a',
      3: '0xd37776fE6dACF581edCD49fCA75477ffc41D430E',
    },
    name: 'HYFI Party!',
    symbol: 'WPP-USDT UNI-V2 LP',
    tokenSymbol: 'WPP',
    icon: '💰',
  },
  {
    pid: 2,
    lpAddresses: {
      1: '0xa84704ea470fcbd38ae350b41cf6aa91cad71a0f',
    },
    tokenAddresses: {
      1: '0x3b74fc995685877028e1b78b185415fc8a86a1e7',
    },
    name: 'Hyfi',
    symbol: 'WPP-HYFI UNI-V2 LP',
    tokenSymbol: 'HYFI',
    icon: '💵',
  },
  {
    pid: 3,
    lpAddresses: {
      1: '0x7ca3ee7d12b8084252b0babfd98b2744fffde4af',
    },
    tokenAddresses: {
      1: '0x3b74fc995685877028e1b78b185415fc8a86a1e7',
    },
    name: 'Hyfi',
    symbol: 'HYFI-USDT UNI-V2 LP',
    tokenSymbol: 'HYFI',
    icon: '🏦',
  },
  // {
  //   pid: 2,
  //   lpAddresses: {
  //     1: '0xd3d2e2692501a5c9ca623199d38826e513033a17',
  //   },
  //   tokenAddresses: {
  //     1: '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984',
  //   },
  //   name: 'Uniswap',
  //   symbol: 'UNI-ETH UNI-V2 LP',
  //   tokenSymbol: 'UNI',
  //   icon: '🦄',
  // },
  // {
  //   pid: 3,
  //   lpAddresses: {
  //     1: '0xdc98556ce24f007a5ef6dc1ce96322d65832a819',
  //   },
  //   tokenAddresses: {
  //     1: '0x429881672B9AE42b8EbA0E26cD9C73711b891Ca5',
  //   },
  //   name: 'Pickle',
  //   symbol: 'PICKEL-ETH UNI-V2 LP',
  //   tokenSymbol: 'PICKEL',
  //   icon: '🥒',
  // },
  // {
  //   pid: 9,
  //   lpAddresses: {
  //     1: '0x32ce7e48debdccbfe0cd037cc89526e4382cb81b',
  //   },
  //   tokenAddresses: {
  //     1: '0x62359Ed7505Efc61FF1D56fEF82158CcaffA23D7',
  //   },
  //   name: 'CORE Vault',
  //   symbol: 'CORE-ETH UNI-V2 LP',
  //   tokenSymbol: 'CORE',
  //   icon: '☄️',
  // },
  // {
  //   pid: 5,
  //   lpAddresses: {
  //     1: '0xc5be99a02c6857f9eac67bbce58df5572498f40c',
  //   },
  //   tokenAddresses: {
  //     1: '0xd46ba6d942050d489dbd938a2c909a5d5039a161',
  //   },
  //   name: 'Ampleforth',
  //   symbol: 'AMPL-ETH UNI-V2 LP',
  //   tokenSymbol: 'AMPL',
  //   icon: '🅰️',
  // },
  // {
  //   pid: 6,
  //   lpAddresses: {
  //     1: '0xa2107fa5b38d9bbd2c461d6edf11b11a50f6b974',
  //   },
  //   tokenAddresses: {
  //     1: '0x514910771af9ca656af840dff83e8264ecf986ca',
  //   },
  //   name: 'Chainlink',
  //   symbol: 'LINK-ETH UNI-V2 LP',
  //   tokenSymbol: 'LINK',
  //   icon: '⛓',
  // },
]
