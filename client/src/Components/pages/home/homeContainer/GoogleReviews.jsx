import React, { useEffect } from 'react';
import styled from 'styled-components';

export default function GoogleReviewsWidget() {
  useEffect(() => {
    // Charger dynamiquement le script Elfsight
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.async = true;
    document.body.appendChild(script);

    // Nettoyage : Supprimer le script si le composant est démonté
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <GoogleReviewsWidgetStyled>
            <div className='titleContainerReviews'>
              <h1>Ils nous font confiances</h1>
            </div>
      {/* Conteneur pour le widget Elfsight */}
      <div className="elfsight-app-2baecb95-a501-4485-9646-2f58afd60e71" data-elfsight-app-lazy></div>
    </GoogleReviewsWidgetStyled>
  );
}

const GoogleReviewsWidgetStyled = styled.div`
  .titleContainerReviews{
    display: flex;
    align-items: center;
    justify-content: center;

    h1{
      color: #0a0d30;
  font-size: 40px;
  font-family: "Dancing Script";
 text-transform: uppercase;

    }
  }
`