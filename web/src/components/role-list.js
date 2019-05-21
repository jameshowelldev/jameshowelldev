import React from 'react'
import { buildImageObj } from '../lib/helpers'
import { imageUrlFor } from '../lib/image-url'
import styled from 'styled-components'

const StyledAuthorImg = styled.img`
  border-radius: 50%;
  border: 5px solid #000;

  @media screen and (max-width: 767px){
    display: none;
  }
`

const StyledRoleList = styled.div``

function RoleList ({ items, title }) {
  return (
    <StyledRoleList>
      <ul>
        {items.map(item => (
          <li key={item._key}>
            {item.person && item.person.image && item.person.image.asset && (
              <StyledAuthorImg
                src={imageUrlFor(buildImageObj(item.person.image))
                  .width(100)
                  .height(100)
                  .fit('crop')
                  .url()}
                alt=''
              />
            )}
            <div>
              <span>By </span>
              <strong>{(item.person && item.person.name) || <em>Missing</em>}</strong>
            </div>
          </li>
        ))}
      </ul>
    </StyledRoleList>
  )
}

export default RoleList
