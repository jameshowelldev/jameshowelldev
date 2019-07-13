import React from 'react'
import styled from 'styled-components'
import { StyledH1 } from './typography.styles'

const StyledArticleHeading = styled(StyledH1)`
  position: relative;
  background-color: #ecd018;
  padding: var(--siteSpacingSmall) var(--siteSpacingMedium) var(--siteSpacingSmall) var(--siteSpacingMedium);
  line-height: 1.2;

  @media screen and (min-width: 640px) and (max-width: 1439px){
    padding: var(--siteSpacingSmall) 48px var(--siteSpacingSmall) 48px;
  }
  
  @media (min-width: 1440px){
    padding: var(--siteSpacingSmall) 48px var(--siteSpacingSmall) 0;
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
