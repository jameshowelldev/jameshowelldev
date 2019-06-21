import { format, distanceInWords, differenceInDays } from 'date-fns'
import React from 'react'
import { buildImageObj } from '../lib/helpers'
import { imageUrlFor } from '../lib/image-url'
import BlockContent from './block-content'
import RoleList from './role-list'
import Container from './container'
import Article from './article'
import RelatedPosts from './related-posts'
import MainImage from './main-image'
import ArticleHeading from './article-heading'
import ArticleContent from './article-content'
import ArticleMeta from './article-meta'
import CategoriesList from './categories-list'

function BlogPost (props) {
  const { _rawBody, authors, categories, relatedPosts, title, mainImage, publishedAt } = props
  return (
    <Container bgcolor='white' padding='all'>
      <Article>
        <ArticleHeading>{title}</ArticleHeading>
        <RelatedPosts posts={relatedPosts} />
        <MainImage
          src={imageUrlFor(buildImageObj(mainImage))
            .width(1200)
            .height(Math.floor((9 / 16) * 1200))
            .fit('crop')
            .url()}
          alt={mainImage.alt}
        />
        {_rawBody &&
          <ArticleContent>
            <BlockContent blocks={_rawBody} />
            <ArticleMeta>
              {publishedAt && (
                <div>
                  {authors && <RoleList items={authors} title='Author' />}
                  <span>Published on {differenceInDays(new Date(publishedAt), new Date()) > 3
                    ? distanceInWords(new Date(publishedAt), new Date())
                    : format(new Date(publishedAt), 'MMMM Do YYYY')}</span>
                </div>
              )}
              {categories && (
                <CategoriesList categories={categories} />
              )}
            </ArticleMeta>
          </ArticleContent>
        }
      </Article>
    </Container>
  )
}

export default BlogPost
