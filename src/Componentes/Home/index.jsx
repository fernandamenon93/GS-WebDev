import React, { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const images = [
    "public/onibus.jpg",
    "public/bicicleta.jpg",
    "public/eletrico.webp",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="text">
      <h1>EcoRide: Transporte Inteligente e Sustentável</h1>
      <p>
        Transforme seus trajetos diários em ações que ajudam o planeta. Descubra
        rotas inteligentes, ganhe recompensas e reduza suas emissões de carbono.
      </p>
      <Link to="/funcionalidades">
        <button className="home-button">Saiba Mais</button>
      </Link>

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

      <div className="info-container">

  <div className="info-section">
    <h2>Por que escolher o EcoRide?</h2>
    <div className="info-cards">
      <div className="info-card">
        <h3>Economia</h3>
        <p>Reduza custos com transporte diário.</p>
      </div>
      <div className="info-card">
        <h3>Sustentabilidade</h3>
        <p>Diminua suas emissões de carbono.</p>
      </div>
      <div className="info-card">
        <h3>Recompensas</h3>
        <p>Ganhe pontos e troque por benefícios.</p>
      </div>
    </div>
  </div>

  <div className="info-section">
    <h2>O que você pode fazer com o EcoRide?</h2>
    <ul className="info-list">
      <li>Planeje rotas inteligentes com impacto reduzido.</li>
      <li>Participe de desafios e ganhe pontos.</li>
      <li>Monitore sua economia de CO₂ e custos.</li>
      <li>Acompanhe estatísticas personalizadas</li>
      <li>Encontre caronas compartilhadas com carros elétricos</li>
      <li>Receba notificações em tempo real</li>
      <li>Descubra eventos e campanhas sustentáveis</li>
      <li>Conecte-se à comunidade sustentável</li>
    </ul>
  </div>

  <div className="testimonial-section">
    <h2>O que nossos usuários dizem</h2>
    <blockquote>
      "Com o EcoRide, reduzi minhas emissões de carbono e economizei R$100 por
      mês em transporte. É incrível!" – Maria, SP.
    </blockquote>
    <br />
    <blockquote>
    "Usar o EcoRide mudou a minha rotina! Agora, sempre que uso transporte público
     ou bicicleta, acompanho minha economia de CO₂. É gratificante!" – João, RJ.
    </blockquote>
    <br />
    <blockquote>
    "O sistema de desafios me motiva a escolher opções mais sustentáveis. Ganhei
     descontos incríveis em lojas parceiras!" – Ana, MG.
    </blockquote>
    <br />
    <blockquote>
    "Planejar minhas rotas ficou muito mais fácil. Além disso, sinto que estou realmente
     contribuindo para um futuro mais verde." – Carla, PR.
    </blockquote>
  </div>
  
</div>

      <div className="cta-section">
        <h2>Junte-se à nossa comunidade:</h2>
        <Link to="/contato">
          <button className="cta-button">Comece Agora</button>
          <br />
        </Link>
        <br />
      </div>
    </div>
  );
};

export default Home;
