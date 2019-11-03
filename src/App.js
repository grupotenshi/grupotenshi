import React from 'react';

import './App.css';/*
import logo from './logo.png';
import $ from 'jquery';*/
import Carousel from './Inicio/Carousel.js';
import QueHacemos from './Inicio/QueHacemos.js';

class App extends React.Component {

  render() {
    return (
      <div>
        <div className="frame__title-wrap">
          <h1 className="header__title">Grupo Tenshi</h1>
        </div>
        <div className="frame__WhatsApp social-btns">
          <a className="btn whatsapp" rel="noopener noreferrer" target="_blank" href="https://wa.me/573103500905?text=¡Hola! Quisiera aumentar la calidad con la que trabaja mi empresa">
            <i className="fab fa-whatsapp" aria-hidden="true"></i>
          </a>
        </div>
        <div className="container-fluid">

          <Carousel/>

          <QueHacemos/>

          <div className="container text-dark p-3 mb-3 wow zoomIn faster box">

            <div className="row text-white ">
              <div className="col-3 d-flex justify-content-center">
                <img className="animated pulse infinite celular" src="img/inssmart.png" width="250" alt="" />
              </div>
              <div className="col-9">
                <span>¿Cómo lo hacemos?</span>
                <ul>
                  <li className="wow zoomIn">Configuración de hosting</li>
                  <li className="wow zoomIn">Desarrollo a la medida del prototipo en la plataforma web</li>
                  <li className="wow zoomIn">Diseño responsive: adaptación a diferentes dispositivos: Computador, móvil, Tablet.</li>
                  <li className="wow zoomIn">Verificación de rendimiento: optimizamos el peso de la página web</li>
                  <li className="wow zoomIn">Aprobación por parte del cliente</li>
                  <li className="wow zoomIn">Integración con redes sociales</li>
                  <li className="wow zoomIn">Integración de formularios con correo electrónico</li>
                  <li className="wow zoomIn">Instalación de Google Analytics</li>
                  <li className="wow zoomIn">Configuración de dominio</li>
                  <li className="wow zoomIn">Capacitación al cliente en el manejo de la página web</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }

}





export default App;
