import React from 'react'
import styled from 'styled-components'
import Button from '../../../reusable-ui/Button'

export default function EndOfYear() {
  return (
    <EndOfYearStyled> 
    <h1 className="endOfYearTitle">Fête de fin d'année</h1>
    <hr className="hrEndOfYear" />
    <p className="endOfyearFirstP">
      Sublimez vos vitrines pour les fêtes, et démarquez-vous !
    </p>
    <p className="endOfyearSecondP">
      Parlez-nous de vos envies, et imaginons ensemble le parfait décor pour
      votre boutique, showroom, entrée d’hôtel ou restaurant.
    </p>
    <Button
      label="Contactez nous"
      className="EndOfYearPartyBtn"
      onclick={() => {}}
    /></EndOfYearStyled>
  )
}

const EndOfYearStyled = styled.div`

    height: 350px;
    margin-left: 50px;
    margin-right: 50px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #b8acb854;

    .endOfYearTitle {
      font-size: 50px;
      font-weight: 400;
      color: #0a0d30;
      font-family: "Dancing Script";
    }

    .hrEndOfYear {
      margin: 40px auto;
      width: 30%;
      color: #0a0d30;
      border-bottom: 1px solid;
    }

    .endOfyearFirstP {
      margin-bottom: 25px;

      font-size: 30px;
      font-weight: 400;
      color: #0a0d30;
      font-family: "Dancing Script";
    }

    .endOfyearSecondP {
      margin-bottom: 15px;

      font-size: 20px;
      font-weight: 400;
      color: #5d5d63;
      font-family: "Dancing Script";
    }

    .EndOfYearPartyBtn {
      width: 30%;
    }
  
`