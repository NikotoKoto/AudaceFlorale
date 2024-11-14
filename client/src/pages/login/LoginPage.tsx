import React, { useState } from "react";
import Footer from "../../components/layout/footer/Footer";
import Navbar from "../../components/layout/navbar/Navbar";
import LoginForm from "./LoginForm";
import SubscribeForm from "./SubscribeForm";
import styled from "styled-components";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const LoginPage: React.FC = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);

  const handleFormSwitch = () => {
    setIsLoginForm(!isLoginForm);
  };

  return (
    <LoginPageStyled>
      <Navbar />
      <MainContent>
        <TransitionGroup component={null}>
          <CSSTransition
            classNames="form-transition"
            key={isLoginForm ? "login" : "subscribe"} // Ensure unique keys
            timeout={500}
          >
            {isLoginForm ? (
              <LoginForm onSwitchToSubscribe={handleFormSwitch} />
            ) : (
              <SubscribeForm onSwitchToLogin={handleFormSwitch} />
            )}
          </CSSTransition>
        </TransitionGroup>
      </MainContent>
      <Footer />
    </LoginPageStyled>
  );
};

export default LoginPage;

const LoginPageStyled = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  justify-content: space-between;
  background: white;
`;

const MainContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 400px;
  position: relative;

  .form-transition-enter {
    transform: translateX(100%);
    opacity: 0;
  }

  .form-transition-enter-active {
    transform: translateX(50%);
    opacity: 1;
    transition: transform 500ms, opacity 500ms;
  }

  .form-transition-exit {

    opacity: 1;
  }

  .form-transition-exit-active {

    opacity: 0;

  }
`;