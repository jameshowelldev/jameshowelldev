import styled from 'styled-components'

const StyledH1 = styled.h1`
  font-size: 1.5rem;
  margin: 0;

  @media screen and (min-width: 640px){
    font-size: 2rem;
  }

  @media screen and (min-width: 1280px){
    font-size: 3.4rem;
  }
`
const StyledH2 = styled.h2`
  font-size: 2rem;
  margin: 0;
`
const StyledH3 = styled.h3`
  font-size: 1.6rem;
  margin: 0;
`
const StyledH4 = styled.h4`
  font-size: 1.25rem;
  margin: 0;
`

export {
  StyledH1,
  StyledH2,
  StyledH3,
  StyledH4
}
