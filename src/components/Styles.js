import styled from 'styled-components'

export const Title = styled.h1`
  font-family: 'Roboto', sans-serif;
  margin: 10px 0;
  text-decoration: underline;
  text-decoration-color: gold;
`

export const SplashTitle = styled.h1`
  font-family: 'Lulo', sans-serif;
  color: white;
  font-size: 2.5rem;
  margin: 5px 0 10px 0;
  border-bottom: 1px solid white;
`
// export const Button = styled.button`
//   background-color: gold;
//   border: none;
//   width: 100%;
//   color: #000;
//   font-size: 1.25rem;
//   font-family: 'Roboto';
//   text-transform: uppercase;
//   font-weight: bold;
//   padding: 10px 0;
//   border-radius: 8px;
//   text-decoration: none;
//   & > a {
//     display: block;
//     text-decoration: none;
//     color: black;
//     &:hover {
//       background-color: black;
//       color: white;
//     }
//     &:visited {
//       color: indigo;
//     }
//   }
// `

export const Button = styled.button`
  background-color: gold;
  border: none;
  width: 100%;
  color: #000;
  font-size: 1.25rem;
  font-family: 'Roboto';
  text-transform: uppercase;
  font-weight: bold;
  padding: 10px 0;
  border-radius: 8px;
  text-decoration: none;
  & > a {
    display: block;
    text-decoration: none;
    color: black;
    &:hover {
      background-color: black;
      color: white;
    }
    &:visited {
      color: indigo;
    }
  }
`
