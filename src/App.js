import React from 'react';

import './App.css';/*
import logo from './logo.png';
import $ from 'jquery';*/

class App extends React.Component {

  render() {
    return (
      <div className="container-fluid">
      
        <div class="frame__title-wrap"><h1 class="header__title">Grupo Tenshi</h1></div>

          <div id="carousel" className="carousel slide carousel-fade " data-ride="carousel">
              <ol className="carousel-indicators wow fadeIn " data-wow-duration="5s">
                  <li data-target="#carousel" data-slide-to="0" className="active"></li>
                  <li data-target="#carousel" data-slide-to="1"></li>
                  <li data-target="#carousel" data-slide-to="2"></li>
              </ol>
              <div className="carousel-inner">


                  <div className="carousel-item active">

                      <div className="row justify-content-center align-items-center h-100">
                          <div className="col-12">
                              <div className="row mx-0 align-items-center justify-content-center">
                                  <div className="col-12 mb-5 animated fadeInDown text-white ant-06">
                                      <h2 className="text-center text-warning animated fadeInDown ant-09">Te acompañamos en todo el proceso para el diseño y desarrollo de tu sitio web</h2>
                                  </div>

                                  <div className="col-lg-6 d-flex justify-content-center align-items-end ">
                                      <div className="ct-tablet">
                                          <img className="animated fadeInLeft mx-1 ant-08" src="img/tabletc.png" alt="Tablet"/>
                                      </div>

                                      <div className="ct-computador">
                                          <img className="animated fadeInDown mx-1 ant-05" src="img/pantallac.png" alt="Computador"/>
                                      </div>


                                      <div className="ct-movil">
                                          <img className="animated fadeInRight mx-1 abt-08" src="img/movilc.png" alt=""/>
                                      </div>

                                  </div>
                              </div>
                          </div>
                      </div>


                  </div>
                  <div className="carousel-item">

                      <div className="row justify-content-center align-items-center h-100">
                          <div className="col-12">
                              <div className="row mx-0 align-items-center">

                                  <div className="col-lg-6 d-flex justify-content-center align-items-end ">

                                      <div className="ct-tablet">
                                          <img className="animated fadeInLeft mx-1 ant-08" src="img/tabletc.png" alt="Tablet"/>
                                      </div>

                                      <div className="ct-computador">
                                          <img className="animated fadeInDown mx-1 ant-05" src="img/pantallac.png" alt="Computador"/>
                                      </div>


                                      <div className="ct-movil">
                                          <img className="animated fadeInRight mx-1 ant-08" src="img/movilc.png" alt=""/>
                                      </div>

                                  </div>
                                  <div className="col-lg-6  text-white">
                                      <h1 className="text-warning animated fadeInDown ant-07 ">Desarrollo de Software</h1>

                                      <span className="animated fadeInDown ant-05">Software a la medida, basados en las necesidades de tu empresa, podras optimizar tiempos y llevar control de tu empresa en tiempo real</span>
                                  </div>


                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="carousel-item">

                      <div className="row justify-content-center align-items-center h-100">
                          <div className="col-12">
                              <div className="row mx-0 justify-content-center align-items-center">
                                  <div className="col-lg-6 d-flex justify-content-center align-items-end ">
                                      <img className="animated fadeInDown mx-1 ant-08" src="img/movil.png" alt=""/>
                                      <img className="animated fadeInDown mx-1 ant-11" src="img/tablet.png" alt=""/>
                                      <img className="animated fadeInDown  mx-1 ant-14" src="img/laptop.png" alt=""/>
                                      <img className="animated fadeInDown mx-1 ant-17" src="img/monitor.png" alt=""/>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <style>

          </style>


          <div className="container skill">
              <div className="container my-5">
                  <section className="  row justify-content-center text-center ">
                      <article className="wow fadeInLeft  col-lg-4 d-flex flex-column  align-items-center" data-wow-duration="2s">
                          <i className="material-icons">devices</i>
                          <span>Responsive Design</span>
                          <p>Ofrecemos diseños que se ajustan diferentes resoluciones</p>
                      </article>

                      <article className="wow fadeIn col-lg-4 d-flex flex-column  align-items-center" data-wow-duration="3s">
                          <i className="material-icons">code</i>
                          <span>Programación</span>
                          <p>Desarrollamos basándonos en las necesidades de tu empresa</p>
                      </article>

                      <article className="wow fadeInRight col-lg-4 d-flex flex-column  align-items-center" data-wow-duration="2s">
                          <i className="material-icons">web</i>
                          <span>Administración</span>
                          <p>Podrás modificar la información de tu página fácilmente</p>
                      </article>

                      <article className="wow fadeInLeft col-lg-4 d-flex flex-column align-items-center" data-wow-duration="2s">
                          <i className="material-icons">timelapse</i>
                          <span>Garantía</span>
                          <p>Garantizamos nuestros servicios y tiempo de entrega</p>
                      </article>

                      <article className="wow fadeIn col-lg-4 d-flex flex-column  align-items-center" data-wow-duration="3s">
                          <i className="material-icons">trending_up</i>
                          <span>Comunnity Manager</span>
                          <p>Promocionamos sus productos y servicios en Google, redes sociales y otros medios </p>
                      </article>

                      <article className="wow fadeInRight col-lg-4 d-flex flex-column  align-items-center" data-wow-duration="2s">
                          <i className="material-icons">data_usage</i>
                          <span>Estructuras de Bases de Datos</span>
                          <p>Analizamos y diseñamos las estructuras de bases de datos </p>
                      </article>
                  </section>
              </div>
          </div>






          <div className="container text-dark p-3 mb-3 wow zoomIn faster box">

              <div className="row text-white ">
                  <div className="col-3 d-flex justify-content-center">
                      <img className="animated pulse infinite" src="img/inssmart.png" width="250" alt="" />
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
    );
  }

}





export default App;
