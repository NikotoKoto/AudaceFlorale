import Footer from "../../reusable-ui/footer/Footer";
import styled from "styled-components";
import LoginForm from "./LoginForm";
import Navbar from "../../reusable-ui/navbar/Navbar";
import SubscribeForm from "./SubscribeForm";
import { useState } from "react";

export default function LoginPage() {
  const [isLoginForm, setIsLoginForm] = useState(true);

  const handleFormSwitch = () => {
    setIsLoginForm(!isLoginForm);
  };

  return (
    <LoginPageStyled>
      <Navbar />
      {isLoginForm ? (
        <LoginForm onSwitchToSubscribe={handleFormSwitch} />
      ) : (
        <SubscribeForm onSwitchToLogin={handleFormSwitch} />
      )}

      <Footer />
    </LoginPageStyled>
  );
}

const LoginPageStyled = styled.div`
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background: white;
`;
