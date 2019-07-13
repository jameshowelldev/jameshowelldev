import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
  box-sizing: border-box;
  background-color: ${props => props.bgcolor ? props.bgcolor : 'transparent'};
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  padding-left: var(--siteSpacingMedium);
  padding-right: var(--siteSpacingMedium);
  ${props => props.padding === 'all' && `
    padding-top: var(--siteSpacingMedium);
    padding-bottom: var(--siteSpacingMedium);
  `}

  @media screen and (min-width: 1440px){
    ${props => props.gutters === 'none' && `
      padding-left: 0;
      padding-right: 0;
    `}
  }
`

const Container = ({ bgcolor, children, padding, className, gutters }) => {
  return <StyledContainer className={className} bgcolor={bgcolor} padding={padding} gutters={gutters}>{children}</StyledContainer>
}

export default Container
