import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import TextInput from "../../reusable-ui/TextInput"
import { IoChevronForward } from "react-icons/io5";
import { IoIosLock } from "react-icons/io";
import { BsPerson } from "react-icons/bs";
import Button from "../../reusable-ui/Button";


export default function LoginForm() {
  //state
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  //comportement
  

  const handleChangeUsername = (event) => {
    setUsername(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    setUsername('');
    setPassword('');
    navigate(`/home/${username}`)
  };
  //render
  return (
    <LoginFormStyled action="submit" onSubmit={handleSubmit}>
      
      <h2>Connectez vous</h2>
      <hr />
      <div className="Input-styled">
        <TextInput Icon={<BsPerson/>} value={username} placeholder="Nom de compte" onChange={handleChangeUsername} required type="text"></TextInput>
        <TextInput Icon={<IoIosLock/>} value={password} placeholder="Mot de passe" onChange={handleChangePassword} required type="password"></TextInput>
      

      <Button label="Acceder à mon espace" Icon={<IoChevronForward/>}/>
      <span className="password-forgot">Mot de passe oublié? </span>
      </div>
    </LoginFormStyled>
  );
}

const LoginFormStyled = styled.form`
position: relative;
font-family: "Dancing Script";
  text-align: center;
  max-width: 500px;
  min-width: 400px;
  margin: 0px auto;
  padding: 1.5rem 1.5rem;
  border-radius: 15px;

  hr {
  
    border: 1.5px solid black;
    margin-bottom: 30px;
    margin-top: 20px;
    color: #0a0d30;
   
  }
  
  h2 {
    color: #0a0d30;
    font-size: 40px;
    margin: 20px 10px 10px;
    text-transform: uppercase;
  }
  .password-forgot{
    color: #0a0d30;
    cursor: pointer;
    display: flex;
    padding-top: 10px;
    justify-content: flex-end;

    &:hover{
      color:grey;
    }

    &:active{
      transform: scale(0.95);
    }
  }
`;
