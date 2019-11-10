import React from 'react';

class QueHacemos extends React.Component {
  render() {
    return (
        <div className="container skill">
          <div className="container">
            <section className="row align-content-center text-center hv-100">
              <article className="wow fadeInLeft  col-lg-4 d-flex flex-column  align-items-center" data-wow-duration="2s">
                <i className="icon-iconos_responsive"></i>
                <span>Responsive Design</span>
                <p>Ofrecemos diseños que se ajustan diferentes resoluciones</p>
              </article>

              <article className="wow fadeIn col-lg-4 d-flex flex-column  align-items-center" data-wow-duration="3s">
                <i className="icon-iconos_progamacion2"></i>
                <span>Programación</span>
                <p>Desarrollamos basándonos en las necesidades de tu empresa</p>
              </article>

              <article className="wow fadeInRight col-lg-4 d-flex flex-column  align-items-center" data-wow-duration="2s">
                <i className="icon-iconos_administracion"></i>
                <span>Administración</span>
                <p>Podrás modificar la información de tu página fácilmente</p>
              </article>

              <article className="wow fadeInLeft col-lg-4 mt-lg-7 d-flex flex-column align-items-center" data-wow-duration="2s">
                <i className="icon-iconos_garantia"></i>
                <span>Garantía</span>
                <p>Garantizamos nuestros servicios y tiempo de entrega</p>
              </article>

              <article className="wow fadeIn col-lg-4 mt-lg-7 d-flex flex-column  align-items-center" data-wow-duration="3s">
                <i className="icon-iconos_comm-mag"></i>
                <span>Comunnity Manager</span>
                <p>Promocionamos sus productos y servicios en Google, redes sociales y otros medios </p>
              </article>

              <article className="wow fadeInRight col-lg-4 mt-lg-7 d-flex flex-column  align-items-center" data-wow-duration="2s">
                <i className="icon-iconos_database2"></i>
                <span>Estructuras de Bases de Datos</span>
                <p>Analizamos y diseñamos las estructuras de bases de datos </p>
              </article>
            </section>
          </div>
        </div>
      )
    }
  }
export default QueHacemos;
