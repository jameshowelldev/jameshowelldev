import React from 'react'
import styled from 'styled-components'

const StyledMainImage = styled.img`
  grid-area: image;
  max-width: 100%;
`

const MainImage = ({ className, src, alt }) =>
  <StyledMainImage
    className={className}
    src={src}
    alt={alt}
  />

export default MainImage
