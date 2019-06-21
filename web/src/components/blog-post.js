import { format, distanceInWords, differenceInDays } from 'date-fns'
import React from 'react'
import { buildImageObj } from '../lib/helpers'
import { imageUrlFor } from '../lib/image-url'
import BlockContent from './block-content'
import RoleList from './role-list'
import styled from 'styled-components'
import {
  StyledH1,
  StyledH3
} from './typography.styles'
import Container from './container'

function BlogPost (props) {
  const { _rawBody, authors, categories, title, mainImage, publishedAt } = props
  const StyledMainWithSidebar = styled.div`
    display: grid;
    grid-gap: 12px;
    grid-template-columns: 1fr;
    grid-template-areas:
      "articletitle articletitle articletitle articletitle"
      "meta meta meta meta"
      "main main main main"
      "main main main main";
    
    @media screen and (min-width: 1024px){
      grid-gap: 24px;
      grid-template-columns: 1fr 1fr 1fr 300px;
      grid-template-rows: auto 1fr 1fr;
      grid-template-areas:
        "articletitle articletitle articletitle meta"
        "main main main meta"
        "main main main meta"
        "main main main meta";
    }
  `

  const StyledArticleInfo = styled.div`
    margin-bottom: 12px;
    grid-area: author;

    @media screen and (max-width: 767px) {
      background-color: #000;
      padding: 12px;
      color: #fff;
    }
  `

  const StyledBlogPostContainer = styled(Container)`
    padding: 12px;
    background: #fff;

    @media screen and (min-width: 768px) {
      padding: 24px;
    }
  `

  const StyledBlogPostH1 = styled(StyledH1)`
    position: relative;
    background-color: #ecd018;
    padding: 12px 48px 12px 48px;
    
    @media (min-width: 1440px){
      padding: 12px 48px 12px 0;

      &:before {
        content: '';
        display: block;
        height: 100%;
        width: 96px;
        background-color: inherit;
        position: absolute;
        left: -96px;
        top: 0;
      }
    }
  `

  const StyledArticleTitle = styled.div`
    grid-area: articletitle;
  `

  const StyledMain = styled.div`
    grid-area: main;
  `

  const StyledCategories = styled.div`
    grid-area: categories;

    @media screen and (max-width: 767px) {
      display: none;
    }
  `

  const StyledCategoriesList = styled.ul`

    li {
      background-color: #ccc;
      padding: 5px;
      display: inline-block;
      margin-right: 12px;
      margin-top: 12px;
      font-size: 0.8rem;
    }
  `

  const StyledArticleMeta = styled.div`
    grid-area: meta;
    
    @media screen and (max-width: 767px){
      display: grid;
      grid-template-areas: "author";
      grid-template-columns: 1fr;
    }
    
    @media screen and (min-width: 768px) and (max-width: 1023px){
      display: grid;
      grid-template-columns: auto 1fr;
      grid-template-areas: "author categories";
      grid-gap: 12px;
    }
  `

  const StyledMainImage = styled.img`
    max-width: 100%;
  `

  return (
    <article>
      <StyledBlogPostContainer>
        <StyledMainWithSidebar>
          <StyledArticleTitle>
            <StyledBlogPostH1>{title}</StyledBlogPostH1>
          </StyledArticleTitle>
          <StyledMain>
            {mainImage && mainImage.asset && (
              <StyledArticleInfo>
                <StyledMainImage
                  src={imageUrlFor(buildImageObj(mainImage))
                    .width(1200)
                    .height(Math.floor((9 / 16) * 1200))
                    .fit('crop')
                    .url()}
                  alt={mainImage.alt}
                />
              </StyledArticleInfo>
            )}

            {_rawBody && <BlockContent blocks={_rawBody} />}
          </StyledMain>
          <StyledArticleMeta>
            {publishedAt && (
              <StyledArticleInfo>
                {authors && <RoleList items={authors} title='Author' />}
                <span>Published on {differenceInDays(new Date(publishedAt), new Date()) > 3
                  ? distanceInWords(new Date(publishedAt), new Date())
                  : format(new Date(publishedAt), 'MMMM Do YYYY')}</span>
              </StyledArticleInfo>
            )}
            {categories && (
              <StyledCategories>
                <StyledH3>Categories</StyledH3>
                <StyledCategoriesList>
                  {categories.map(category => (
                    <li key={category._id}>{category.title}</li>
                  ))}
                </StyledCategoriesList>
              </StyledCategories>
            )}
          </StyledArticleMeta>
        </StyledMainWithSidebar>
      </StyledBlogPostContainer>
    </article>
  )
}

export default BlogPost
