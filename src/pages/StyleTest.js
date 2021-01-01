import { useState } from 'react'
import useWindowResize from '../hooks/useWindowResize'

import Button from '../components/Button'
import Modal from '../components/Modal'

const StyleTest = () => {

  const [ isModal, setIsModal ] = useState(false)

  const size = useWindowResize()

  const homeBox = {
    padding: '64px',
    margin: '64px',
    zIndex: '2',
    position: 'absolute',
    top: '0',
    border: '1px solid #eab4d5',
    width: `${size.width - 256}px`,
    height: `${size.height - 256}px`
  }

  const toggleModal = () => {
    setIsModal(!isModal)
  }

  return (
    <div style={homeBox}>
      <h1>Heading 1</h1>
      <Button text={'Open Modal'} execute={toggleModal}/>
      <Modal isModal={isModal}>
        <p>Content...</p>
        <hr />
        <Button text={'Close Modal'} execute={toggleModal}/>
      </Modal>
    </div>
  )
}

export default StyleTest
