import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Header = (props) => {

  return (
    <HeaderBox>
      <h1>Game Name</h1>
      <NavBar>
        <NavBarLinks>
          <Link style={navLink} to='/'>Home</Link>
          <Link style={navLink} to='/game'>Game</Link>
          <Link style={navLink} to='/test'>Test</Link>
          <Link style={navLink} to='/style'>Style Test</Link>
        </NavBarLinks>
        <NavBarLinks>
          {props.isUser ? (
            <Link style={navLink} to='#'>Logout</Link>
          ) : (
            <>
            <Link style={navLink} to='#'>Sign Up</Link>
            <Link style={navLink} to='#'>Login</Link>
            </>
          )}
        </NavBarLinks>
      </NavBar>
    </HeaderBox>
  )
}

export default Header

const HeaderBox = styled.div`
  background: #eab4d5;
  border-bottom: 4px solid #ad3768;
  margin-bottom: 32px;
  padding: 16px;
  display: flex;
  flex-direction: column;
`

const NavBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const NavBarLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const navLink = {
  padding: '8px'
}
