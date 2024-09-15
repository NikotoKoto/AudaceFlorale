import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import TextInput from "../../reusable-ui/TextInput"

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
    navigate(`/homePage/${username}`)
  };
  //render
  return (
    <LoginFormStyled action="submit" onSubmit={handleSubmit}>
      <h1>Bienvenue chez Audace Florale</h1>
      <hr />
      <h2>Connectez vous</h2>
      <div className="Input-styled">
        <TextInput value={username} placeholder="Nom de compte" onChange={handleChangeUsername} required type="text"></TextInput>
        <TextInput value={password} placeholder="Mot de passe" onChange={handleChangePassword} required type="password"></TextInput>
      

      <button>Valider</button>
      </div>
    </LoginFormStyled>
  );
}

const LoginFormStyled = styled.form``;
