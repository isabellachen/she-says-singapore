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
  background-color: black;
  opacity: 0.5;
  top: 3rem;
  width: 100%;
  z-index: 100;
  transition: transform 300ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
  transform: ${props => (props.isOpen ? 'none' : 'translateY(-100%)')};
  & > ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
`

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
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
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
                    font-family="OpenSans-Bold, Open Sans"
                    font-size="72"
                    font-weight="bold"
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
            color={'#FFF'}
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
