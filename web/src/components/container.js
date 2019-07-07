import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
  box-sizing: border-box;
  background-color: ${props => props.bgcolor ? props.bgcolor : 'transparent'};
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 12px;
  padding-right: 12px;
  ${props => props.padding === 'all' && `
    padding-top: 12px;
    padding-bottom: 12px;
  `}


  @media screen and (min-width: 768px) {
    padding-left: 24px;
    padding-right: 24px;
    ${props => props.padding === 'all' && `
      padding-top: 24px;
      padding-bottom: 24px;
    `}
  }

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
