import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Nav = () => (
  <StyledNav>
    <StyledNavList>
      <StyledNavListItem>
        <StyledNavItemLink to='/about/'>About</StyledNavItemLink>
      </StyledNavListItem>
      <StyledNavListItem>
        <StyledNavItemLink to='/projects/'>Projects</StyledNavItemLink>
      </StyledNavListItem>
      <StyledNavListItem>
        <StyledNavItemLink to='/blog/'>Blog</StyledNavItemLink>
      </StyledNavListItem>
      <StyledNavListItem>
        <StyledNavItemLink to='/contact/'>Contact</StyledNavItemLink>
      </StyledNavListItem>
    </StyledNavList>
  </StyledNav>
)

const StyledNav = styled.nav`
  display: flex;
  flex: 1;
  justify-content: flex-end;
`

const StyledNavList = styled.ul`
  margin: 0;
  list-style: none;
  display: none;
  background-color: #000;
  
  @media screen and (min-width: 1024px){
    display: flex;
  }
`

const StyledNavListItem = styled.li`
  padding-left: 12px;
  padding-right: 12px;
`

const StyledNavItemLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-family: 'Raleway', sans-serif;
  font-size: 24px;
  text-transform: uppercase;
`

export default Nav
