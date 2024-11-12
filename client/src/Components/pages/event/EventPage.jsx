import styled from "styled-components";
import Navbar from "../../reusable-ui/navbar/Navbar";
import Mourning from "./eventContainer/Mourning";
import Wedding from "./eventContainer/Wedding";

import Footer from "../../reusable-ui/footer/Footer"
import EndOfYear from "./eventContainer/EndOfYear";

export default function EventPage() {


  return (
    <EventPageStyled>
      <Navbar />
      <div className="eventContainerTitle">
        <h1>Des fleurs haut de gamme pour votre évènement sur mesure</h1>
      </div>
     <EndOfYear/>

      <hr className="hrEvent" />
      <div className="eventContainerSubtitle">
        <h2>Vos événements</h2>
      </div>
     
        
        <Wedding />
        <Mourning />
    <Footer/>
    </EventPageStyled>
  );
}
const EventPageStyled = styled.div`
display: flex;
flex-direction:column;
  .eventContainerTitle {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 50px 0 50px 0;

    h1 {
      font-size: 60px;
      font-weight: 400;
      color: #0a0d30;
      font-family: "Dancing Script";
    }
  }
  

  .hrEvent {
    margin: 40px auto;
    width: 5%;
    color: #0a0d30;
    border-bottom: 4px solid;
  }

  .eventContainerSubtitle {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 50px;

    h2 {
      font-size: 60px;
      font-weight: 400;
      color: #0a0d30;
      font-family: "Dancing Script";
    }
  }


`;
