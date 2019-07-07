import React from 'react'
import Header from './header'
import Footer from './footer'
import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --sitePadding: 12px;
  }

  @media screen and (min-width:768px) {
    :root {
      --sitePadding: 24px;
    }
  }

  body {
    margin: 0;
    font-family: 'Raleway', sans-serif;
    background-color: #ccc;
    font-size: 18px;
    line-height: 1.5;
  }

  h1, h2, h3, h4 {
    margin-top: 0;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  p {
    margin-top: 0;
  }

  a {
    line-height: inherit;
    color: #be46e2;
  }

  img{
    max-width: 100%;
  }

  pre {
    overflow: scroll;
    border: 1px solid;
  }
`
const StyledPageGrid = styled.div`
  display: grid;
  grid-template-areas: "header" "main" "footer";
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
`

const Layout = ({ children, onHideNav, onShowNav, showNav, siteTitle }) => (
  <>
    <GlobalStyle />
    <StyledPageGrid>
      <Header siteTitle={siteTitle} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} />
      <div>{children}</div>
      <Footer>Footer</Footer>
    </StyledPageGrid>
  </>
)

export default Layout
