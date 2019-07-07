import { Link } from 'gatsby'
import React from 'react'
import Icon from './icons'
import Nav from './nav'
import styled from 'styled-components'

const Header = ({ onHideNav, onShowNav, showNav, siteTitle }) => (
  <StyledHeader>
    <StyledLogoLink to='/' title={siteTitle}>
      <Icon symbol='logo' />
    </StyledLogoLink>
    <StyledNavToggleButton onClick={showNav ? onHideNav : onShowNav}>
      <Icon symbol='hamburger' />
    </StyledNavToggleButton>
    <Nav />
  </StyledHeader>
)

const StyledNavToggleButton = styled.button`
  display: none;
`

const StyledLogoLink = styled(Link)`
  display: inline-block;
`

const StyledHeader = styled.header`
  margin-left: auto;
  margin-right: auto;
  max-width: 1440px;
  padding: 12px;
  width: 100%;
  display: flex;
  align-items: center;
  box-sizing: border-box;

  @media screen and (min-width:768px){
    padding: 24px;
  }

  @media screen and (min-width: 1440px) {
    padding: 24px 0;
  }
`

export default Header
