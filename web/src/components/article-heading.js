import React from 'react'
import styled from 'styled-components'
import { StyledH1 } from './typography.styles'

const StyledArticleHeading = styled(StyledH1)`
  position: relative;
  background-color: #ecd018;
  padding: 12px 48px 12px 48px;
  
  @media (min-width: 1440px){
    padding: 12px 48px 12px 0;
    &:before {
      content: '';
      display: block;
      height: 100%;
      width: 96px;
      background-color: inherit;
      position: absolute;
      left: -96px;
      top: 0;
    }
  }
`

const ArticleHeading = ({ className, children }) => <StyledArticleHeading className={className}>{children}</StyledArticleHeading>

export default ArticleHeading
