import BaseBlockContent from '@sanity/block-content-to-react'
import React from 'react'
import Figure from './figure'
import Slideshow from './slideshow'
import Code from './code'
import {
  StyledH1,
  StyledH2,
  StyledH3
} from '../typography.styles'

const serializers = {
  types: {
    block (props) {
      switch (props.node.style) {
        case 'h1':
          return <StyledH1>{props.children}</StyledH1>

        case 'h2':
          return <StyledH2>{props.children}</StyledH2>

        case 'h3':
          return <StyledH3>{props.children}</StyledH3>

        case 'blockquote':
          return <blockquote>{props.children}</blockquote>

        default:
          return <p>{props.children}</p>
      }
    },
    figure (props) {
      return <Figure {...props.node} />
    },
    slideshow (props) {
      return <Slideshow {...props.node} />
    },
    code (props) {
      return <Code {...props.node} />
    }
  }
}

const BlockContent = ({ blocks }) => <BaseBlockContent blocks={blocks} serializers={serializers} />

export default BlockContent
