import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h3>EcoRide</h3>
          <p>Transformando mobilidade em sustentabilidade.</p>
        </div>

        <div className="footer-links">
          <h4>Links Úteis</h4>
          <ul>
            <li>
              <a href="/comunidade">Sobre Nós</a>
            </li>
            <li>
              <a href="/funcionalidades">Funcionalidades</a>
            </li>
            <li>
              <a href="/contato">Fale Conosco</a>
            </li>
          </ul>
        </div>

        <div className="footer-social">
          <h4>Siga-nos</h4>
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
        </div>
      </div>

      <div className="footer-bottom">
      <img src="public/logo.png" alt="" width={100}  height={100}/>
        <p>&copy; 2024 EcoRide. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
