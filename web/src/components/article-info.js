import React from 'react'
import styled from 'styled-components'

const StyledArticleInfo = styled.div`
  @media screen and (max-width: 640px) {
    background-color: #000;
    padding: 12px;
    color: #fff;
  }
`

const ArticleInfo = ({ className, children }) => <StyledArticleInfo>{children}</StyledArticleInfo>

export default ArticleInfo
