import React from 'react'
import styled from 'styled-components'

const StyledArticleMeta = styled.div`
  grid-area: articlemeta;
  @media screen and (max-width: 640px) {
    background-color: #000;
    padding: 12px;
    color: #fff;
  }

  ul {
    list-style: none;
    color: #000;
  }
`

const ArticleMeta = ({ className, children }) => <StyledArticleMeta>{children}</StyledArticleMeta>

export default ArticleMeta
