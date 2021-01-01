import useWindowResize from '../hooks/useWindowResize'

const Home = () => {

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

  return (
    <div style={homeBox}>
      <p>Home...</p>
    </div>
  )
}

export default Home
