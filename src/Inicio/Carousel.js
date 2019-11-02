import React from 'react';

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

                <div className="row justify-content-center align-items-center h-100">
                  <div className="col-12">
                    <div className="row mx-0 justify-content-center align-items-center">
                      <div className="col-lg-6 d-flex justify-content-center align-items-end ">
                        <img className="animated fadeInDown mx-1 ant-08" src="img/movil.png" alt="" />
                        <img className="animated fadeInDown mx-1 ant-11" src="img/tablet.png" alt="" />
                        <img className="animated fadeInDown  mx-1 ant-14" src="img/laptop.png" alt="" />
                        <img className="animated fadeInDown mx-1 ant-17" src="img/monitor.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    );
  }

}





export default Carousel;
