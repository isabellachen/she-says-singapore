import React, { Component } from 'react'
import styled from 'styled-components'

const NavContainer = styled.div`
  position: relative;
`
const NavElements = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: firebrick;
  width: 100%;
  height: 2rem;
  z-index: 100;
`

const Menu = styled.div`
  position: absolute;
  background-color: blue;
  top: 2rem;
  width: 100%;
  transition: transform 300ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
  transform: ${props => (props.isOpen ? 'none' : 'translateY(-100%)')};
  & > ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
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
          <span>logo</span>
          <button onClick={this.toggleMenu}>button</button>
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
