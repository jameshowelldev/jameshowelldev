import { Link } from 'gatsby'
import React from 'react'
import { buildImageObj, getBlogUrl } from '../lib/helpers'
import { imageUrlFor } from '../lib/image-url'
import BlockText from './block-text'
import styled from 'styled-components'

const StyledBlogPostPreview = styled.div`
  border: 1px solid #000;
  background-color: #fff;
  height: 100%;

  a {
    display: inline-block;
  }

  img {
    vertical-align: middle;
  }

  .postHeading {
    margin: 0 0 12px;

    a {
      font-size: 1.25rem;
      text-decoration: none;
    }
  }

  .postBody {
    padding: 12px;
  }
`

function BlogPostPreview (props) {
  return (
    <StyledBlogPostPreview>
      {props.mainImage && props.mainImage.asset && (
        <Link to={getBlogUrl(props.publishedAt, props.slug.current)}>
          <img
            src={imageUrlFor(buildImageObj(props.mainImage))
              .width(600)
              .height(Math.floor((9 / 16) * 600))
              .url()}
            alt={props.mainImage.alt}
          />
        </Link>
      )}
      <div className='postBody'>
        <h3 className='postHeading'><Link to={getBlogUrl(props.publishedAt, props.slug.current)}>{props.title}</Link></h3>
        {props._rawExcerpt && (
          <div>
            <BlockText blocks={props._rawExcerpt} />
          </div>
        )}
      </div>
    </StyledBlogPostPreview>
  )
}

export default BlogPostPreview
