import React, { useState } from 'react'
import { Transition } from 'react-transition-group'
import styled from 'styled-components'

const Hamburger = props => {

  const [ isOpen, setIsOpen ] = useState(false)

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
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
    <Menu isOpen={isOpen} toggleOpen={toggleOpen}/>
    </>
  )
}

const Menu = props => (
  <Transition in={props.isOpen} timeout={500}>
    {state => (
      <div
        style={{
          ...closedState,
          ...transitionStates[state]
        }}
      >
        <MenuBox>
          <InnerBox>
            <div style={{display: 'flex', justifyContent: 'flex-end'}}>
              <svg
                viewBox="0 0 80 80"
                width="24" height="24"
                style={{ margin: '12px', cursor: 'pointer'}}
                onClick={props.toggleOpen}
              >
                <path stroke='#110307' d='M 0,0 L 80,80 M 0,80 L 80,0'></path>
              </svg>
            </div>
            I am {state}
          </InnerBox>
        </MenuBox>
      </div>
    )}
  </Transition>
)

const closedState = {

}

const transitionStates = {
  entering: {},
  entered: {},
  exiting: {},
  exited: {}
}

const MenuBox = styled.div`
  background: #eab4d5;
  color: #110307;
  border-width: 3px;
  border-style: none double double none;
  border-color: #110307;
  padding: 0px 8px 8px 0px;
  max-width: 512px;
`

const InnerBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  border-width: 0.5px;
  border-style: none solid solid none;
  border-color: #110307;
`

export default Hamburger
