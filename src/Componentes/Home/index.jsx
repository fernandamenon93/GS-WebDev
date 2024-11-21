import React, { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const images = [
    "https://via.placeholder.com/800x400?text=Transporte+Sustentável+1",
    "https://via.placeholder.com/800x400?text=Transporte+Sustentável+2",
    "https://via.placeholder.com/800x400?text=Transporte+Sustentável+3",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="home-container">
      <h1>EcoRide: Transporte Inteligente e Sustentável</h1>
      <p>
        Reduza suas emissões de carbono e contribua para um planeta mais verde.
        Descubra as melhores opções de transporte sustentável!
      </p>

      {/* Carrossel */}
      <div className="carousel-container">
        <button className="carousel-btn prev" onClick={prevSlide}>
          &#8249;
        </button>
        <div className="carousel-slide">
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="carousel-image"
          />
        </div>
        <button className="carousel-btn next" onClick={nextSlide}>
          &#8250;
        </button>
      </div>

      {/* Botão "Saiba Mais" */}
      <Link to="/beneficios">
        <button className="home-button">Saiba Mais</button>
      </Link>
    </div>
  );
};

export default Home;
