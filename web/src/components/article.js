import React from 'react'
import styled from 'styled-components'

const StyledArticle = styled.article`
  display: grid;
  grid-gap: var(--siteSpacingMedium);
  grid-template-columns: 1fr;
  grid-template-rows: auto auto 1fr auto;
  grid-template-areas: "title" "image" "articlecontent" "related";
}

  @media screen and (min-width:960px){
    grid-template-columns: 1fr 300px;
    grid-template-rows: auto auto 1fr;
    grid-template-areas: "title related" "image related" "articlecontent related";
  }
`

const Article = ({ children, className }) => {
  return <StyledArticle className={className}>{children}</StyledArticle>
}

export default Article
