import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import TextInput from "../../components/reusable/TextInput";
import { IoChevronForward } from "react-icons/io5";
import { IoIosLock } from "react-icons/io";
import { BsPerson } from "react-icons/bs";
import Button from "../../components/reusable/Button";

interface LoginFormProps {
  onSwitchToSubscribe: () => void;
  className?: string;
}

export default function LoginForm({ onSwitchToSubscribe, className }: LoginFormProps) {
  // State
  const [username, setUsername] = useState<string>("Toto");
  const [password, setPassword] = useState<string>("Toto");
  const navigate = useNavigate();

  // Handlers
  const handleChangeUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleReturnStore = () => {
    navigate("/");
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setUsername("");
    setPassword("");
    navigate(`/home/${username}`);
  };

  // Render
  return (
    <LoginFormStyled action="submit" onSubmit={handleSubmit} className={className}>
      <h2>Connectez vous</h2>
      <hr />
      <div className="Input-styled">
        <TextInput
          Icon={<BsPerson />}
          value={username}
          placeholder="Nom de compte"
          onChange={handleChangeUsername}
          required
          type="text"
        />
        <TextInput
          Icon={<IoIosLock />}
          value={password}
          placeholder="Mot de passe"
          onChange={handleChangePassword}
          required
          type="password"
        />
        <span className="password-forgot">Mot de passe oublié? </span>

        <div className="buttonStyle">
          <Button label="Accéder à mon espace" Icon={<IoChevronForward />} onClick={handleReturnStore}/>
          <Button
            label="Retour à la boutique"
            Icon={<IoChevronForward />}
            className="buttonReturnStore"
            onClick={handleReturnStore}
          />
        </div>
        <span className="noAccount" onClick={onSwitchToSubscribe}>
          Pas de compte ? Créez-en un !
        </span>
      </div>
    </LoginFormStyled>
  );
}

const LoginFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
    width: 100%;
    color: #0a0d30;
  }

  h2 {
    color: #0a0d30;
    font-size: 40px;
    margin: 20px 10px 10px;
    text-transform: uppercase;
  }

  .password-forgot {
    color: #0a0d30;
    cursor: pointer;
    display: flex;
    justify-content: flex-end;
    padding: 0 0 20px 0;

    &:hover {
      color: grey;
    }

    &:active {
      transform: scale(0.95);
    }
  }

  .buttonStyle {
    display: flex;
    flex-direction: row;
    gap: 10px;
    width: 100%;
  }

  .buttonReturnStore {
    background: none;
    color: #0a0d30;
    border: none;
  }

  .noAccount {
    cursor: pointer;

    &:hover {
      color: grey;
    }
  }
`;
