import styled from 'styled-components'

const Button = props => {

  const Wrapper = styled.div`
    border: 1px solid #86284f;
    transition: 0.5s all ease-out;
    cursor: pointer;
    width: fit-content;

    &:hover {
      border: 1px solid #110307;
    }
  `

  const Button = styled.button`
    cursor: pointer;
    padding: 8px;
    margin: 2px;
    font-family: 'Courier';
    background-color: #86284f;
    color: #eab4d5;
    border: none;
    transition: 0.5s all ease-out;

    &:hover {
      background-color: #110307;
      color: #86284f;
    }
  `

  return (
    <Wrapper
      onClick={props.execute}
    >
      <Button>
        {props.text}
      </Button>
    </Wrapper>
  )

}

export default Button
