import React from 'react'
import styled from 'styled-components'

const Nav: React.FC = () => {
  return (
    <StyledNav>
      <StyledLink
        target="_blank"
        href="https://etherscan.io/address/0xBd38C0F2c9cB7Be863BD8bAD30babd02DF398595#code"
      >
        Master Contract
      </StyledLink>
      <StyledLink
        target="_blank"
        href="https://etherscan.io/address/0x3b74fC995685877028e1b78b185415fc8A86A1e7#code"
      >
        Hyfi Token
      </StyledLink>
      <StyledLink
        target="_blank"
        href="https://etherscan.io/address/0x3b74fC995685877028e1b78b185415fc8A86A1e7#code"
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
