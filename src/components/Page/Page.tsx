import React from 'react'
import styled from 'styled-components'
import Footer from '../Footer'
import background from '../../assets/img/background.jpg'

const Page: React.FC = ({ children }) => (
  <StyledPage>
    <StyledBackground><StyledMain>{children}</StyledMain></StyledBackground>
    <Footer />
  </StyledPage>
)

const StyledPage = styled.div``

const StyledMain = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - ${(props) => props.theme.topBarSize * 2}px);
`

const StyledBackground = styled.div`
  background-image: url('${background}');
  background-color: #101113;
  background-repeat: no-repeat;
  background-position: center;
  // background-size: cover;
`

export default Page
