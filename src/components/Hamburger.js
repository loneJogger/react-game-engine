import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Transition } from 'react-transition-group'
import styled from 'styled-components'

const Hamburger = props => {

  const [ isOpen, setIsOpen ] = useState(false)

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <Wrapper>
      <svg
        viewBox="0 0 100 80"
        width="40" height="40"
        style={{ margin: '12px', cursor: 'pointer'}}
        onClick={toggleOpen}
      >
        <rect width="100" height="15" fill='#eab4d5'></rect>
        <rect y="30" width="100" height="15" fill='#eab4d5'></rect>
        <rect y="60" width="100" height="15" fill='#eab4d5'></rect>
      </svg>
      <Menu isOpen={isOpen} toggleOpen={toggleOpen} options={props.options}/>
  </Wrapper>
  )
}

const Menu = props => {

  const generateOptions = options => {
    if (options) {
      const list = options.map(option => {
        return (
          <LinkBox>
            <Link to={option.url} onClick={props.toggleOpen}>{option.text}</Link>
          </LinkBox>
        )
      })
      return list
    } else {
      return null
    }
  }

  return (
    <Transition in={props.isOpen} timeout={500}>
      {state => (
        <div
          className={`menuSlide-${state}`}
        >
          <MenuBox>
            <div style={{display: 'flex', justifyContent: 'flex-end'}}>
              <svg
                viewBox="0 0 80 80"
                width="24" height="24"
                style={{ margin: '12px', cursor: 'pointer'}}
                onClick={props.toggleOpen}
              >
                <path stroke='#110307' strokeWidth='4' d='M 0,0 L 80,80 M 0,80 L 80,0'></path>
              </svg>
            </div>
            <div>
              {generateOptions(props.options)}
            </div>
          </MenuBox>
        </div>
      )}
    </Transition>
  )
}

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  z-index: 2;
`

const MenuBox = styled.div`
  background: #eab4d5;
  color: #110307;
  width: 512px;
  padding: 8px;
`

const LinkBox = styled.div`
  padding: 8px;
  font-size: 20px;
`

export default Hamburger
