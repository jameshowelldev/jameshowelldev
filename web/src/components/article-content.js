import React from 'react'
import styled from 'styled-components'

const StyledArticleContent = styled.div`
  grid-area: articlecontent;
  display: grid;
  grid-gap: 24px;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  grid-template-areas: "articlemeta" "articletext";

  @media screen and (min-width: 1280px) {
    grid-template-columns: 1fr 300px;
    grid-template-areas: "articletext articlemeta";
  }

  ul {
    line-height: 1.5;
    list-style-type: disc;
    list-style-position: inside;
  }
`

const ArticleContent = ({ className, children }) => <StyledArticleContent>{children}</StyledArticleContent>

export default ArticleContent
