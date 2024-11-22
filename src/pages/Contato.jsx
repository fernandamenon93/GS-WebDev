import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Contato = () => {
  return (
    <div className="contact-container">
      <h1>Fale Conosco</h1>
      <p>
        Quer saber mais sobre transporte sustentável ou compartilhar suas ideias? Entre em contato com a EcoRide:
      </p>

      <div className="contact-info">
        <p>
          <strong>Email:</strong> <a href="mailto:suporte@ecoride.com">suporte@ecoride.com</a>
        </p>
        <p>
          <strong>Telefone:</strong> <a href="tel:+5511999999999">(11) 91234-5678</a>
        </p>
        <p>
          <strong>Endereço:</strong> Rua Verde Palestra, 123 - São Paulo, SP
        </p>
      </div>

      <section className="social-media">
        <h2>Redes Sociais</h2>
        <ul>
          <li>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} /> Facebook
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} /> Instagram
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} /> Twitter
            </a>
          </li>
        </ul>
      </section>

      <section className="hours">
        <h2>Horário de Atendimento:</h2>
        <p>De segunda a sexta-feira: 8h às 18h</p>
      </section>
    </div>
  );
};

export default Contato;
