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

                <div className="row justify-content-center align-items-center h-100">
                  <div className="col-12">
                    <div className="row mx-0 align-items-center justify-content-center">
                      <div className="col-12 mb-5 animated fadeInDown text-white ant-06">
                        <h2 className="text-center text-warning animated fadeInDown ant-09">Te acompañamos en todo el proceso para el diseño y desarrollo de tu sitio web</h2>
                      </div>

                      <div className="col-lg-6 d-flex justify-content-center align-items-end ">
                        <div className="ct-tablet">
                          <img className="animated fadeInLeft mx-1 ant-08" src="img/tabletc.png" alt="Tablet" />
                        </div>

                        <div className="ct-computador">
                          <img className="animated fadeInDown mx-1 ant-05" src="img/pantallac.png" alt="Computador" />
                        </div>


                        <div className="ct-movil">
                          <img className="animated fadeInRight mx-1 abt-08" src="img/movilc.png" alt="" />
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
                          <img className="animated fadeInLeft mx-1 ant-08" src="img/tabletc.png" alt="Tablet" />
                        </div>

                        <div className="ct-computador">
                          <img className="animated fadeInDown mx-1 ant-05" src="img/pantallac.png" alt="Computador" />
                        </div>


                        <div className="ct-movil">
                          <img className="animated fadeInRight mx-1 ant-08" src="img/movilc.png" alt="" />
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

                <div className="row align-content-center justify-content-center align-items-center h-100 w-100">

                <div className="particles col-6">
                <Particles
              params={{
          	    "fps_limit": 25,
          	    "particles": {
          	        "number": {
          	            "value": 100,
          	            "density": {
          	                "enable": false
          	            }
          	        },
          	        "line_linked": {
          	            "enable": true,
          	            "distance": 30,
          	            "opacity": 0.3
          	        },
          	        "move": {
          	            "speed": 0
          	        },
          	        "opacity": {
          	            "anim": {
          	                "enable": true,
          	                "opacity_min": 0,
          	                "speed": 2,
          	                "sync": true
          	            },
          	            "value": 0.4
          	        }
          	    },
          	    "polygon": {
          	        "enable": true,
          	        "scale": 0.5,
          	        "type": "inline",
          	        "move": {
          	            "radius": 10
          	        },
          	        "url": "img/reno.svg",
          	        "inline": {
          	            "arrangement": "equidistant"
          	        },
          	        "draw": {
          	            "enable": true,
          	            "stroke": {
          	                "color": "rgba(135, 0, 255, .5)"
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
                </div>
              </div>
            </div>
          </div>
    );
  }

}





export default Carousel;
