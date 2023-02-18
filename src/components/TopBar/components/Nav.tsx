import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

interface NavProps {
  showMenu: boolean
}

const Nav: React.FC<NavProps> = ({ showMenu }) => {
  return (
    <StyledNav>
      {showMenu && (
        <>
	  <StyledLink exact activeClassName="active" to="/">
        Home
      </StyledLink>
	  <StyledAbsoluteLink href="https://florachain.org/apr" target="_blank">
        APR Tracker
      </StyledAbsoluteLink>
	  <StyledLink exact activeClassName="active" to="/faq">
        FAQ
      </StyledLink>
      </>)}
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  align-items: left;
  display: flex;
`

const StyledLink = styled(NavLink)`
  color: #fff;
  font-weight: 700;
  padding-left: ${(props) => props.theme.spacing[3]}px;
  padding-right: ${(props) => props.theme.spacing[3]}px;
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.color.grey[500]};
  }
  &.active {
    color: ${(props) => props.theme.color.primary.main};
  }
  @media (max-width: 400px) {
    padding-left: ${(props) => props.theme.spacing[2]}px;
    padding-right: ${(props) => props.theme.spacing[2]}px;
  }
`

const StyledAbsoluteLink = styled.a`
  color: #fff;
  font-weight: 700;
  padding-left: ${(props) => props.theme.spacing[3]}px;
  padding-right: ${(props) => props.theme.spacing[3]}px;
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.color.grey[500]};
  }
  &.active {
    color: ${(props) => props.theme.color.primary.main};
  }
  @media (max-width: 400px) {
    padding-left: ${(props) => props.theme.spacing[2]}px;
    padding-right: ${(props) => props.theme.spacing[2]}px;
  }
`

export default Nav
