import React from 'react'
import styled from 'styled-components'

import Container from '../Container'

import chef from '../../assets/img/1.png'

import AccountButton from './components/AccountButton'
import Nav from './components/Nav'

import { Link } from 'react-router-dom'

interface TopBarProps {
  onPresentMobileMenu: () => void,
  showButton?: boolean
}

const StyledLogo = styled(Link)`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 0;
  min-height: 44px;
  min-width: 44px;
  padding: 0;
  text-decoration: none;
  font-size: 1.6em;
  color: #fff;
  font-weight: 100;
  
  img {
    margin-right: 12px;
  }
  strong {
    margin-right: 8px;
    font-weight: 500;
  }
`

const TopBar: React.FC<TopBarProps> = ({ onPresentMobileMenu, showButton = false }) => {
  return (
    <StyledTopBar>
      <Container size="lg">
        <StyledTopBarInner>
          <StyledLogo to="/">
            <img src={chef} height={50} />
          </StyledLogo>
          <Nav showMenu={true} />
          {showButton &&
          <StyledAccountButtonWrapper>
            <AccountButton />
          </StyledAccountButtonWrapper>
          }
        </StyledTopBarInner>
      </Container>
    </StyledTopBar>
  )
}

const StyledLogoWrapper = styled.div`
  width: 360px;
  @media (max-width: 400px) {
    width: auto;
  }
`

const StyledTopBar = styled.div`
background: rgb(0, 0, 0);  
`

const StyledTopBarInner = styled.div`
  align-items: center;
  display: flex;
  height: ${(props) => props.theme.topBarSize}px;
  justify-content: space-between;
  max-width: ${(props) => props.theme.siteWidth}px;
  width: 100%;
`
const StyledNavWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  @media (max-width: 400px) {
    display: none;
  }
`

const StyledAccountButtonWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-end;
  width: 156px;
  @media (max-width: 400px) {
    justify-content: center;
    width: auto;
  }
`

const StyledMenuButton = styled.button`
  background: none;
  border: 0;
  margin: 0;
  outline: 0;
  padding: 0;
  display: none;
  @media (max-width: 400px) {
    align-items: center;
    display: flex;
    height: 44px;
    justify-content: center;
    width: 44px;
  }
`

export default TopBar
