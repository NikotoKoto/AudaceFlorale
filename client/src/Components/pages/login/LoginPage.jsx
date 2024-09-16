import Footer from "../../reusable-ui/footer/Footer"
import styled from 'styled-components'
import LoginForm from './LoginForm'
import Navbar from '../../reusable-ui/navbar/Navbar'


export default function LoginPage() {
  return (
    <LoginPageStyled>
      <Navbar/>
      <LoginForm/>
      <Footer/>
    </LoginPageStyled>
  )
}

const LoginPageStyled = styled.div`
  
  display: flex;
  flex-direction: column;
  min-height: 100vh; 
  background: white;
  
  

`
