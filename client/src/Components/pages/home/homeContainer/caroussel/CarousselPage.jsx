import React, { useEffect, useState } from "react";
import styled from "styled-components";

const images = [
  {
    src: "https://via.placeholder.com/800x400/ff6347/ffffff?text=Image+1",
    buttonText: "Commandez votre bouquet",
    buttonLink: "/order",
    title: "Fleur de saison",
  },
  {
    src: "https://via.placeholder.com/800x400/4682b4/ffffff?text=Image+2",
    buttonText: "Découvrez notre travail",
    buttonLink: "/wedding",
    title: "Je me marie",
  },
];

export default function CarousselPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  useEffect(() => {
    // Temps de changmeent d'image
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    // Show overlay after the image has changed (0.5s delay)
    setIsOverlayVisible(false); // Hide overlay while switching images
    const overlayTimeout = setTimeout(() => {
      setIsOverlayVisible(true);
    }, 1000); // Delay for 0.5s

    return () => {
      clearInterval(interval);
      clearTimeout(overlayTimeout);
    };
  }, [currentIndex]);

  return (
    <CarouselStyled>
      <div className="carousel-container">
        <img
          src={images[currentIndex].src}
          alt={`Carousel Image ${currentIndex + 1}`}
        />
        <div className={`overlay ${isOverlayVisible ? "visible" : ""}`}>
          <div className="titleContainer">
            <h2 className="title">{images[currentIndex].title}</h2>
            <hr />
          </div>
          <a href={images[currentIndex].buttonLink} className="overlay-btn">
            {images[currentIndex].buttonText}
          </a>
        </div>
      </div>
    </CarouselStyled>
  );
}

const CarouselStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 400px;
  overflow: hidden;
  margin: 50px auto;
  position: relative;

  .carousel-container {
    position: relative;
    width: 100%;
    height: 100%;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .overlay {
    position: absolute;
    top: 50px;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40%;
    height: 50%;
    padding-left: 50px;
    background: white;
    flex-direction: column;
    font-family: "Dancing Script", serif;

    /* Initial hidden state */
    opacity: 0;
    transform: translateX(-100px); 
    transition: opacity 0.5s ease, transform 0.5s ease; 

    &.visible {
      opacity: 1; 
      transform: translateX(0); 
    }
  }

  .titleContainer {
    position: relative;
    width: 100%;
    font-size: 20px;
    text-transform: uppercase;
    padding-bottom: 15px;
    color: #0a0d30;

    hr {
      display: flex;
      margin-top: 20px;
      width: 20%;
      border: 3.5px solid #0a0d30;
    }
  }

  .overlay-btn {
    display: inline-flex;
    width: auto;
    position: relative;
    left: 30%;
    bottom: 0;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    text-decoration: none;
    line-height: 1;
    cursor: pointer;
    margin: 20px 0;
    padding: 18px 24px;
    text-transform: uppercase;
    font-size: 15px;
    font-weight: 800;
    color: white;
    background-color: #0a0d30;
    border: 1px solid #0a0d30;
  }

  .overlay-btn:hover {
    background: white;
    color: #0a0d30;
    border: 1px solid #0a0d30;
  }
`;
