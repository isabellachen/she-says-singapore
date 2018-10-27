import React, { Component } from 'react'
import styled from 'styled-components'
import { Squeeze } from 'react-burgers'

const NavContainer = styled.div`
  position: relative;
`
const NavElements = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: gold;
  width: 100%;
  height: 3rem;
  padding-top: 0.25rem;
  z-index: 1000;
`

const Menu = styled.div`
  position: absolute;
  background-color: gold;
  border-top: 5px solid black;
  top: 3rem;
  width: 100%;
  z-index: 100;
  transition: transform 400ms ease;
  transform: ${props => (props.isOpen ? 'none' : 'translateY(-100%)')};
  & > ul {
    margin: 0;
    padding: 10px;
    list-style: none;
    & > li {
      font-size: 1.5rem;
      padding: 5px;
      color: black;
      border-bottom: 2px solid #e5c516;
      font-weight: 300;
      margin-bottom: 5px;
    }
  }
`
// cubic - bezier(0.68, -0.55, 0.265, 1.55)
const Icon = styled.svg`
  width: 83px;
  height: 54px;
`

export default class NavBar extends Component {
  state = {
    isOpen: false,
  }

  toggleMenu = () => {
    this.setState(state => ({ isOpen: !state.isOpen }))
  }

  render() {
    return (
      <NavContainer>
        <NavElements>
          <Icon viewBox="-50 0 332 128">
            <g
              id="Page-1"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
            >
              <g id="A4" transform="translate(-221.000000, -323.000000)">
                <g id="Group" transform="translate(221.000000, 323.000000)">
                  <path
                    d="M76.5,110 C91.9318214,110 106.474153,106.919842 118.314679,101.064312 C123.5,98.5 118.314679,115.5 146.5,114 C130.5,105 133.704141,91.646253 136.358667,89.2514923 C146.774861,79.8545998 153,67.9499649 153,55 C153,24.6243388 118.749783,0 76.5,0 C34.2502166,0 0,24.6243388 0,55 C0,85.3756612 34.2502166,110 76.5,110 Z"
                    id="Oval"
                    fill="#000000"
                  />
                  <text
                    id="SG"
                    fontFamily="OpenSans-Bold, Open Sans"
                    fontSize="72"
                    fontWeight="bold"
                    fill="#FFD700"
                  >
                    <tspan x="31" y="77">
                      SG
                    </tspan>
                  </text>
                </g>
              </g>
            </g>
          </Icon>
          <Squeeze
            onClick={this.toggleMenu}
            active={this.state.isOpen}
            color={'#000'}
          />
        </NavElements>
        <Menu isOpen={this.state.isOpen}>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Events</li>
            <li>Blog</li>
            <li>Mentorship</li>
            <li>Join Us</li>
          </ul>
        </Menu>
      </NavContainer>
    )
  }
}
