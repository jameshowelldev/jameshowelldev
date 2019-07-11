import React from 'react'
import styled from 'styled-components'
import Container from './container'

const StyledFooter = styled.footer`
  background-color: #000;
  color: #fff;
  padding: var(--siteSpacingMedium) 0;
`

const Footer = () => (
  <StyledFooter>
    <Container>here</Container>
  </StyledFooter>
)

export default Footer
