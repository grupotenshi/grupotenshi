import React from 'react';

import Particles from 'react-particles-js';

class Carousel extends React.Component {

  render() {
    return (

          <div id="carousel" className="carousel slide carousel-fade " data-ride="carousel">
            <ol className="carousel-indicators wow fadeIn " data-wow-duration="5s">
              <li data-target="#carousel" data-slide-to="0" className="active"></li>
              <li data-target="#carousel" data-slide-to="1"></li>
              <li data-target="#carousel" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">


              <div className="carousel-item active">

                <div className="row align-content-center justify-content-center align-items-center h-100  p-3 m-0">

                      <div className="col-lg-5 d-none d-lg-flex justify-content-center  ">

                          <img src="img/proyectoo.png" alt="" className="imagencarousel1"/>
                      </div>

                        <div className="col-lg-5  animated fadeInDown text-white ant-06">
                            <h1 className="text-warning animated fadeInDown ant-09">Te acompañamos en todo el proceso para el diseño y desarrollo de tu sitio web</h1>

                            <ul className="carousel1-lista" >
                                <li>Realizamos propuestas coherentes</li>
                                <li>Hablamos en palabras simples</li>
                                <li>Capacitamos para tener el control total del sitio</li>
                            </ul>
                        </div>

                </div>

              </div>
              <div className="carousel-item">

                <div className="row align-content-center justify-content-center align-items-center h-100  p-3 m-0">
                    <div className="col-lg-6 d-flex mb-5 mb-lg-0 justify-content-center align-items-end ">

                      {/*<div className="ct-tablet">
                        <img className="animated fadeInLeft mx-1 ant-08" src="img/tabletc.png" alt="Tablet" />
                      </div>

                      <div className="ct-computador">
                        <img className="animated fadeInDown mx-1 ant-05" src="img/pantallac.png" alt="Computador" />
                      </div>


                      <div className="ct-movil">
                        <img className="animated fadeInRight mx-1 ant-08" src="img/movilc.png" alt="" />
                      </div>*/}
                      <div className="Celular3d">
                        <img alt="Celular" src="img/celularvacio.png" />
                        {/*<div className="divIframeCelular">
                          <iframe src="catalogos/demo1/index.html"></iframe>
                        </div>*/}
                      </div>
                    </div>
                    <div className="col-lg-6  text-white">
                      <h1 className="text-warning animated fadeInDown ant-07 ">Desarrollo de Software</h1>

                      <span className="animated fadeInDown ant-05">Software a la medida, basados en las necesidades de tu empresa, podras optimizar tiempos y llevar control de tu empresa en tiempo real</span>
                    </div>
                </div>
              </div>
              <div className="carousel-item">

                <div className="particles row align-content-center justify-content-center align-items-center h-100 w-100 m-0 p-3">

                <div className="col-lg-6 mb-5 mb-lg-0 p-0">
                      <Particles
                        params={{
                    	    "fps_limit": 25,
                    	    "particles": {
                    	        "number": {
                    	            "value": 200,
                    	            "density": {
                    	                "enable": false
                    	            }
                    	        },
                    	        "line_linked": {
                    	            "enable": true,
                    	            "distance": 30,
                    	            "opacity": 0.5,
                                   "color": "#8700FF"
                    	        },
                    	        "move": {
                    	            "speed": 1
                    	        },
                    	        "opacity": {
                    	            "anim": {
                    	                "enable": true,
                    	                "opacity_min": 0.05,
                    	                "speed": 2,
                    	                "sync": false
                    	            },
                    	            "value": 0.25
                    	        },
                              "color": {
                                "value": "#8700FF"
                              },"size": {
                                "value": 5,
                                "random": true
                              }
                    	    },
                    	    "polygon": {
                    	        "enable": true,
                              "scale":  (window.innerWidth * 50)/1440 > 30 ? 0.7 : 0.5,
                    	        "type": "inline",
                    	        "move": {
                    	            "radius": 10
                    	        },
                    	        "url": "img/renito.svg",
                    	        "inline": {
                    	            "arrangement": "equidistant"
                    	        },
                    	        "draw": {
                    	            "enable": true,
                    	            "stroke": {
                    	                "color": "rgba(135, 0, 255, 1)",
                                      "width": 1
                    	            }
                    	        }
                    	    },
                    	    "retina_detect": false,
                    	    "interactivity": {
                    	        "events": {
                    	            "onhover": {
                    	                "enable": true,
                    	                "mode": "bubble"
                    	            }
                    	        },
                    	        "modes": {
                    	            "bubble": {
                    	                "size": 6,
                    	                "distance": 40
                    	            }
                    	        }
                    	    }
                    	}} />
                  </div>

                  <div className="col-lg-6  text-white">
                    <h1 className="text-warning animated fadeInDown ant-07 ">Diseño Gráfico</h1>

                    <span className="animated fadeInDown ant-05">Diseñamos con pasión, dando soluciones en creación de marca, estrategias visuales, piezas publicitarias, etc.</span>
                  </div>

                </div>
              </div>
            </div>
          </div>
    );
  }

}





export default Carousel;
