import React from 'react'
import styled from 'styled-components'
import BlogPostPreview from './blog-post-preview'

const StyledBlogPostList = styled.ul`
  display: grid;
  grid-gap: var(--siteSpacingSmall);

  @media screen and (min-width: 640px){
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (min-width: 960px){
    grid-template-columns: 1fr 1fr 1fr;
  }

`
const BlogPostList = ({ posts, className }) => {
  return (
    <StyledBlogPostList className={className} posts={posts}>
      {posts && posts.map(post => (
        <li key={post.id}><BlogPostPreview {...post} /></li>
      ))}
    </StyledBlogPostList>
  )
}

export default BlogPostList
