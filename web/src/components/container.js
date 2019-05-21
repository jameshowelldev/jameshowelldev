import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 24px;
  padding-right: 24px;
  box-sizing: border-box;
  background-color: ${props => props.bgcolor ? props.bgcolor : 'transparent'};
`

const Container = ({ bgcolor, children, className }) => {
  return <StyledContainer className={className} bgcolor={bgcolor}>{children}</StyledContainer>
}

export default Container
