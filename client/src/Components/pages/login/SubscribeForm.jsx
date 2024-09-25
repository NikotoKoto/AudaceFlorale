import React, { useState } from "react";
import Button from "../../reusable-ui/Button";
import TextInput from "../../reusable-ui/TextInput";
import { IoIosLock } from "react-icons/io";
import { BsPerson } from "react-icons/bs";
import styled from "styled-components";
import { IoChevronForward } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function SubscribeForm({onSwitchToLogin}) {
  //state
  const [newFirstName, setNewFirstName] = useState("toto");
  const [newLastName, setNewLastName] = useState("toto");
  const [newPassword, setNewPassword] = useState("toto");
  const [newEmail, setNewEmail] = useState("toto");
  const navigate = useNavigate();

  //Comportement
  const handleChangeNewFirstName = (event) => {
    setNewFirstName(event.target.value);
  };
  const handleChangeNewLastName = (event) => {
    setNewLastName(event.target.value);
  };
  const handleChangeNewEmail = (event) => {
    setNewEmail(event.target.value);
  };

  const handleChangeNewPassword = (event) => {
    setNewPassword(event.target.value);
  };

  const handleReturnStore = () => {
    navigate("/");
  };
  const handleSubmitNewAccount = (event) => {
    
    event.preventDefault();
    alert(newEmail);
    setNewEmail("");
    setNewFirstName("");
    setNewLastName("");
    setNewPassword("");


    navigate("/login");
  };
  //render
  return (
    <SubscribeFormStyled action="submit" onSubmit={handleSubmitNewAccount}>
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
        ></TextInput>
        <TextInput
          Icon={<BsPerson />}
          value={newLastName}
          placeholder="Nom"
          onChange={handleChangeNewLastName}
          required
          type="text"
          className="inputName"
        ></TextInput>
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
        ></TextInput>

        <TextInput
          Icon={<IoIosLock />}
          value={newPassword}
          placeholder="Password"
          onChange={handleChangeNewPassword}
          required
          type="password"
        ></TextInput>
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
      <span className="alreadyAccount" onClick={onSwitchToLogin}>Déjà un compte ? Connectez-vous ! </span>
    </SubscribeFormStyled>
  );
}

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

  h2{
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

  .alreadyAccount{
    cursor: pointer;

&:hover{
  color:grey;
}
  }
`;
