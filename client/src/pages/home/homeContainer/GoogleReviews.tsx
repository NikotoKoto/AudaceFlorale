import React, { useEffect } from "react";
import styled from "styled-components";

const GoogleReviewsWidget: React.FC = () => {
  useEffect(() => {
    // Dynamically load the Elfsight script
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);

    // Cleanup: Remove the script if the component is unmounted
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <GoogleReviewsWidgetStyled>
      <div className="titleContainerReviews">
        <h1>Ils nous font confiances</h1>
      </div>
      {/* Container for the Elfsight widget */}
      <div className="elfsight-app-2baecb95-a501-4485-9646-2f58afd60e71" data-elfsight-app-lazy></div>
    </GoogleReviewsWidgetStyled>
  );
};

const GoogleReviewsWidgetStyled = styled.div`
  .titleContainerReviews {
    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
      color: #0a0d30;
      font-size: 40px;
      font-family: "Dancing Script";
      text-transform: uppercase;
    }
  }
`;

export default GoogleReviewsWidget;
