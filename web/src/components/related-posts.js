import React from 'react'
import styled from 'styled-components'
import { buildImageObj } from '../lib/helpers'
import { imageUrlFor } from '../lib/image-url'

const StyledRelated = styled.div`
  grid-area: related;
`

const RelatedArticles = ({ posts, className }) => {
  return (
    <StyledRelated>
      <h2>Related Posts</h2>
      {posts.map(post =>
        <div key={post._id}>
          {
            post.mainImage && post.mainImage.asset &&
            <img
              src={imageUrlFor(buildImageObj(post.mainImage))
                .width(300)
                .height(Math.floor((9 / 16) * 300))
                .fit('crop')
                .url()}
              alt={post.mainImage.alt}
            />
          }
          <h3><a href={`/blog/${post.publishedAt.split('-')[0]}/${post.publishedAt.split('-')[1]}/${post.slug.current}`}>{post.title}</a></h3>
        </div>
      )}
    </StyledRelated>)
}

export default RelatedArticles
