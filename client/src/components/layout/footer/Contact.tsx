import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import styled from "styled-components";

// Composant Contact
const Contact: React.FC = () => {
  return (
    <ContactStyled>
      <h3>Contact</h3>
      <span>tonGrosCul@gmail.com</span>
      <span>+33 6 48 84 42 03</span>
      <div className="SocialMedia-Icon">
        <span>
          <FaInstagram />
        </span>
        <span>
          <FaFacebook />
        </span>
      </div>
    </ContactStyled>
  );
};

export default Contact;

// Styles pour le composant Contact
const ContactStyled = styled.div`
  position: relative;
  top: 20px;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 15px;

  h3 {
    padding-bottom: 15px;
    text-transform: uppercase;
  }

  span{
  margin-bottom: 15px;
}
  .SocialMedia-Icon {
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      display: flex;
      width: 40px;
      height: 40px;
      justify-content: center;
      align-items: center;
      margin-left: 15px;
      font-size: 30px;
      border: 1px solid white;
      border-radius: 40px;
    }
  }
`;