import React, { useEffect } from "react";
import styled from "styled-components";

const Timeline: React.FC = () => {
  useEffect(() => {
    const milestones = document.querySelectorAll(".milestone");
    const options = { threshold: 0.1 };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("show");
          }, index * 200); // Ajoute l'animation progressivement
          observer.unobserve(entry.target);
        }
      });
    }, options);

    milestones.forEach((milestone) => {
      observer.observe(milestone);
    });
  }, []);

  return (
    <TimelineStyled>
      <div className="arrow-line">
        <div className="arrow-head"></div>
      </div>
      <div className="milestone left">
        <div className="dot"></div>
        <div className="content">
          <img src="/images/aboutAsset/gouvieux.jpg" alt="Fleur 1996" />
          <div className="text">
            <h3>1996</h3>
            <p>
              Audace Florale a été fondée par Yann, avec une première boutique à
              Gouvieux (60).
            </p>
          </div>
        </div>
      </div>
      <div className="milestone right">
        <div className="dot"></div>
        <div className="content">
          <img src="/images/aboutAsset/chantilly.png" alt="Chantilly 2019" />
          <div className="text">
            <h3>2019</h3>
            <p>
              Expansion de l’entreprise avec un concept-store à Chantilly (60),
              alliant fleurs, décoration, brocante et salon de thé.
            </p>
          </div>
        </div>
      </div>
      <div className="milestone left">
        <div className="dot"></div>
        <div className="content">
          <img src="/images/aboutAsset/today.jpg" alt="Aujourd'hui" />
          <div className="text">
            <h3>Aujourd'hui</h3>
            <p>
              Yann et Pascal, gérants de l’entreprise, continuent de développer
              Audace Florale avec passion et innovation.
            </p>
          </div>
        </div>
      </div>
    </TimelineStyled>
  );
};

const TimelineStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  padding: 50px 20px;
  overflow: hidden;

  .arrow-line {
    position: absolute;
    left: 50%;
    top: -20px;
    bottom: 0;
    width: 6px;
    background-color: #555;
    transform: translateX(-50%);
  }

  .arrow-head {
    position: absolute;
    bottom: -20px;
    left: 50%;
    width: 0;
    height: 0;
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    border-top: 20px solid #555;
    transform: translateX(-50%);
  }

  .milestone {
    display: flex;
    align-items: center;
    width: 100%;
    opacity: 0;
    transform: translateX(-100px);
    transition: opacity 0.6s ease, transform 0.6s ease;
    margin: 40px 0;
    position: relative;
  }

  .milestone.left {
    justify-content: flex-end;
    transform: translateX(-100px);
  }

  .milestone.right {
    justify-content: flex-start;
    transform: translateX(100px);
  }

  .milestone.show {
    opacity: 1;
    transform: translateX(0);
  }

  .dot {
    width: 20px;
    height: 20px;
    background-color: #0a0d30;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
  }

  .content {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
    width: 50%;
  }

  .content img {
    flex: 1;
    width: 500px;
    height: 300px;
    border-radius: 10px;
    object-fit: cover;
    margin: 0 15px;
    border: 3px solid #ddd;
  }

  .text {
    flex: 2;
  }

  .text h3 {
    font-size: 35px;
    margin: 0;
    color: #0a0d30;
    font-family: "Dancing Script";
    font-style: italic;
  }

  .text p {
    font-size: 25px;
    line-height: 1.6;
    color: #0a0d30;
    font-family: "Dancing Script";
    font-style: italic;
  }
`;

export default Timeline;
