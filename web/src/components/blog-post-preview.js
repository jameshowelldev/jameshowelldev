import { Link } from 'gatsby'
import React from 'react'
import { buildImageObj, getBlogUrl } from '../lib/helpers'
import { imageUrlFor } from '../lib/image-url'
import BlockText from './block-text'

function BlogPostPreview (props) {
  return (
    <div>
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
      <h3><Link to={getBlogUrl(props.publishedAt, props.slug.current)}>{props.title}</Link></h3>
      {props._rawExcerpt && (
        <div>
          <BlockText blocks={props._rawExcerpt} />
        </div>
      )}
    </div>
  )
}

export default BlogPostPreview
