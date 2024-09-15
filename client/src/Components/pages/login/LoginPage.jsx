
import styled from 'styled-components'
import LoginForm from './LoginForm'


export default function LoginPage() {
  return (
    <LoginPageStyled>
      <LoginForm/>
    </LoginPageStyled>
  )
}

const LoginPageStyled = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: blue;

`
