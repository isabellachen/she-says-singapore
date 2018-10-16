import styled from 'styled-components'
import Link from 'gatsby-link'

export const Title = styled.h1`
  font-family: 'Roboto', sans-serif;
  margin: 5px 0 10px 0;
`

export const SplashTitle = styled.h1`
  font-family: 'Permanent Marker', sans-serif;
  color: white;
  font-size: 2.5rem;
  margin: 5px 0 10px 0;
  border-bottom: 1px solid white;
`

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
  margin: 0 0 15px 0;
  border-radius: 8px;
  text-decoration: none;
  & > a {
    display: block;
    text-decoration: none;
  }
  &:hover {
    & > a {
      background-color: black;
      color: white;
    }
  }
`
