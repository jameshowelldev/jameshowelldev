import React from 'react'
import styled from 'styled-components'
import BlogPostPreview from './blog-post-preview'

const StyledRelatedList = styled.ul`
  grid-area: related;
`

const RelatedArticles = ({ posts, className }) => {
  return (
    <StyledRelatedList>
      <h2>Related Posts</h2>
      {posts.map(post => <li key={post.id}><BlogPostPreview {...post} /></li>)}
    </StyledRelatedList>)
}

export default RelatedArticles
