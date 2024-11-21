import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Funcionalidades = () => {
  return (
    <div className="features-container">
      <h1>Funcionalidades do EcoRide</h1>
      <p>
        O EcoRide foi desenvolvido para oferecer as melhores soluções em mobilidade sustentável.
        Aqui estão algumas das funcionalidades principais que tornam o transporte mais ecológico, 
        eficiente e acessível:
      </p>
      <ul className="features-list">
        <li>
          <FontAwesomeIcon icon="bicycle" /> 
          <strong> Rotas para Bicicletas:</strong> 
          Encontre as melhores rotas para pedalar com segurança e conforto, 
          reduzindo sua pegada de carbono enquanto cuida da sua saúde.
        </li>
        <li>
          <FontAwesomeIcon icon="bus" /> 
          <strong> Integração com Transporte Público:</strong> 
          Planeje seu trajeto combinando ônibus, metrô e outros modais de transporte público 
          para uma experiência de mobilidade completa.
        </li>
        <li>
          <FontAwesomeIcon icon="car" /> 
          <strong> Caronas Sustentáveis:</strong> 
          Conecte-se com pessoas da sua comunidade para compartilhar caronas, economizar 
          dinheiro e reduzir o número de veículos nas ruas.
        </li>
        <li>
          <FontAwesomeIcon icon="leaf" /> 
          <strong> Monitoramento de Impacto Ambiental:</strong> 
          Acompanhe a redução das suas emissões de CO₂ ao adotar transportes sustentáveis.
        </li>
      </ul>
    </div>
  );
};

export default Funcionalidades;
