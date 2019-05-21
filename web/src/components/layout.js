import React from 'react'
import Header from './header'
import Footer from './footer'
import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --sitePadding: 12px;
  }

  body {
    margin: 0;
    font-family: 'Raleway', sans-serif;
    background-color: #ccc;
    font-size: 18px;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  p {
    line-height: 1.5;
    margin-top: 0;
  }

  pre {
    overflow: scroll;
  }

  @media screen and (min-width:768px) {
    :root {
      --sitePadding: 24px;
    }
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
