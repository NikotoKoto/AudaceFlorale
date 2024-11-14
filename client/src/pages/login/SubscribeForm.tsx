import React, { useState } from "react";
import Button from "../../components/reusable/Button";
import TextInput from "../../components/reusable/TextInput";
import { IoIosLock } from "react-icons/io";
import { BsPerson } from "react-icons/bs";
import styled from "styled-components";
import { IoChevronForward } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { useNavigate } from "react-router-dom";

// Props type
interface SubscribeFormProps {
  onSwitchToLogin: () => void;
  className?: string;
}

const SubscribeForm: React.FC<SubscribeFormProps> = ({ onSwitchToLogin, className }) => {
  // State
  const [newFirstName, setNewFirstName] = useState<string>("toto");
  const [newLastName, setNewLastName] = useState<string>("toto");
  const [newPassword, setNewPassword] = useState<string>("toto");
  const [newEmail, setNewEmail] = useState<string>("toto");
  const navigate = useNavigate();

  // Handlers
  const handleChangeNewFirstName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewFirstName(event.target.value);
  };

  const handleChangeNewLastName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewLastName(event.target.value);
  };

  const handleChangeNewEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewEmail(event.target.value);
  };

  const handleChangeNewPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewPassword(event.target.value);
  };

  const handleReturnStore = () => {
    navigate("/");
  };

  const handleSubmitNewAccount = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(newEmail);
    setNewEmail("");
    setNewFirstName("");
    setNewLastName("");
    setNewPassword("");
    navigate("/login");
  };

  // Render
  return (
    <SubscribeFormStyled
      action="submit"
      onSubmit={handleSubmitNewAccount}
      className={className}
    >
      <h2>Inscrivez-vous !</h2>
      <hr />
      <div className="inputStyled">
        <TextInput
          Icon={<BsPerson />}
          value={newFirstName}
          placeholder="Prenom"
          onChange={handleChangeNewFirstName}
          required
          type="text"
          className="inputName"
        />
        <TextInput
          Icon={<BsPerson />}
          value={newLastName}
          placeholder="Nom"
          onChange={handleChangeNewLastName}
          required
          type="text"
          className="inputName"
        />
      </div>
      <div className="passwordStyle">
        <TextInput
          Icon={<MdOutlineMail />}
          value={newEmail}
          placeholder="Email"
          onChange={handleChangeNewEmail}
          required
          type="text"
          className="inputName"
        />
        <TextInput
          Icon={<IoIosLock />}
          value={newPassword}
          placeholder="Password"
          onChange={handleChangeNewPassword}
          required
          type="password"
        />
      </div>
      <div className="buttonStyle">
        <Button type="submit" label="S'inscrire" Icon={<IoChevronForward />} />
        <Button
          label="Retour à la boutique"
          Icon={<IoChevronForward />}
          className="buttonReturnStore"
          onClick={handleReturnStore}
        />
      </div>
      <span className="alreadyAccount" onClick={onSwitchToLogin}>
        Déjà un compte ? Connectez-vous !
      </span>
    </SubscribeFormStyled>
  );
};

export default SubscribeForm;

// Styled Components
const SubscribeFormStyled = styled.form`
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

  h2 {
    color: #0a0d30;
    font-size: 40px;
    margin: 20px 10px 10px;
    text-transform: uppercase;
  }
  hr {
    border: 1.5px solid black;
    margin-bottom: 30px;
    margin-top: 20px;
    color: #0a0d30;
    width: 100%;
  }

  .inputStyled {
    display: flex;
    flex-direction: row;
    gap: 10px;
    width: 100%;
  }

  .inputName {
    flex: 1;
  }

  .passwordStyle {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
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

  .alreadyAccount {
    cursor: pointer;

    &:hover {
      color: grey;
    }
  }
`;
