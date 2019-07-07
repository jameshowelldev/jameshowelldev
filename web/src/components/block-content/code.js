import React, { useEffect } from 'react'
import Prism from 'prismjs'
import '../../../node_modules/prismjs/themes/prism-funky.css'

function Code (props) {
  useEffect(() => {
    Prism.highlightAll()
  })
  return (
    <pre>
      <code className='language-css'>{props.code}</code>
    </pre>
  )
}

export default Code
