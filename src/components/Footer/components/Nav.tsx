import React from 'react'
import styled from 'styled-components'

const Nav: React.FC = () => {
  return (
    <StyledNav>
      <StyledLink
        target="_blank"
        href="https://etherscan.io/address/0x7c9b9f397Db2c6C573E5144454fD57F668276d33#code"
      >
        Master Contract
      </StyledLink>
      <StyledLink
        target="_blank"
        href="https://etherscan.io/address/0x79a1ca1768fe91867be916efa2b1630c7fc83422#code"
      >
        HyFi Token
      </StyledLink>
      <StyledLink
        target="_blank"
        href="https://etherscan.io/address/0x070Dd12f34DFB926fc5e460e6a5fd9EE530486E6#code"
      >
        Swap Contract
      </StyledLink>
      {/* <StyledLink target="_blank" href="https://t.me/yplt_official">
        Telegram
      </StyledLink>
      <StyledLink target="_blank" href="https://discord.gg/4mN838V">
        Discord
      </StyledLink>
      <StyledLink target="_blank" href="https://github.com/PlutusSwap/yplutus">
        Github
      </StyledLink>
      <StyledLink target="_blank" href="https://twitter.com/PlutusSwap">
        Twitter
      </StyledLink> */}
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  align-items: center;
  display: contents;
  width: 100%;
`

const StyledLink = styled.a`
  color: ${(props) => props.theme.color.grey[400]};
  padding-left: ${(props) => props.theme.spacing[3]}px;
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.color.grey[500]};
  }
`

export default Nav
