import React from 'react'
import styled from 'styled-components'

const StyledCategoriesList = styled.ul`
  li {
    background-color: #ccc;
    padding: 5px;
    display: inline-block;
    margin-right: var(--siteSpacingSmall);
    margin-top: var(--siteSpacingSmall);
    font-size: 0.8rem;
  }
`
const CategoriesList = ({ categories, className }) => {
  return (
    <StyledCategoriesList className={className}>
      {categories.map(category => (
        <li key={category._id}>{category.title}</li>
      ))}
    </StyledCategoriesList>
  )
}

export default CategoriesList
