// Dependencias
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

// Imagenes
import logo from '@Images/logo.png';

// Utileria
import { formatNumber } from '@Util/formatNumber.util';

import { useEmployee } from '@Hooks/useEmployee';

// Dependencias
export default function TargetaPresentacion() {
  // Manejo de estados
  const [isFlipped, setIsFlipped] = useState(false);

  // Hooks
  const location = useLocation();
  const { employee, error: errorEmployee } = useEmployee(location.search);

  // Función para manejar el flip de la tarjeta
  const handleFlip = () => setIsFlipped(!isFlipped);

  return (
    <section className="container-fliud d-flex flex-column align-items-center justify-content-center vh-100">
      <button onClick={handleFlip} className="btn btn-secondary ms-1 mb-3">
        <i className="bi bi-arrow-repeat icon-rotate fs-6"></i>
      </button>
      <article className='card-presentation  card pointer-event'>
        <section className={`card-body seccion-toggle ${isFlipped ? 'seccion-oculta' : ''}`}>
          <div className='row'>
            <div className="col-6">
              <div className="d-flex flex-column align-items-center justify-content-center h-100 container-img">
                <img src={logo} className='img-fluid' width={325} alt="" />
              </div>
            </div>
            <div className="col-6">
              <div className="h-100">
                <p className='h1 text-warning text-center'>Electroservicios Industriales y suministros</p>
                <div className='container-service clapText mb-3'>
                  {
                    (!errorEmployee || employee) && (
                      <>
                        <p className='text-center'>{employee?.prefix}. {employee?.fullname}</p>
                        <p className='text-center'>{employee?.text}</p>
                      </>
                    )
                  }
                </div>
                <div className='container-service clapText mb-3'>
                  <p>Gaspar de la Fuente #317</p>
                  <p>Villas de Nuestra Señora de la Asunción C.P. 20126</p>
                  <p>Aguascalientes, Ags.</p>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="container-service clapText">
                <p>Email</p>
                {
                  (!errorEmployee || employee) && (
                    <p><a href={`mailto:${employee?.email}`}>{employee?.email}</a></p>
                  )
                }
                <p><a href="mailto:contacto@electroserviciosind.com">contacto@electroserviciosind.com</a></p>
              </div>
            </div>
            <div className="col-6">
              <div className="container-service clapText h-100">
                <p className='text-end'>
                  Oficina:
                  <a className='text-decoration-none ms-1' href="tel:+524491584409">158-44-09</a>
                </p>
                {
                  !errorEmployee || employee
                    ? (
                      <>
                        <p className='text-end'>
                          Celular 1:
                          <a className='text-decoration-none ms-1' href={`tel:+52${employee?.phone}`}>{formatNumber(employee?.phone)}</a>
                        </p>
                        <p className='text-end'>
                          Celular 2:
                          <a className='text-decoration-none ms-1' href="tel:+524492695686">449-269-5686</a>
                        </p>
                      </>
                    )
                    : (
                      <p className='text-end'>
                        Celular:
                        <a className='text-decoration-none ms-1' href="tel:+524492695686">449-269-5686</a>
                      </p>
                    )
                }
              </div>
            </div>
          </div>
        </section>
        <section className={`card-body seccion-toggle ${!isFlipped ? 'seccion-oculta' : ''}`}>
          <div className="row">
            <div className="col-6">
              <h3 className='text-center text-warning'>Ingeniería Eléctrica</h3>
              <div className='container-service'>
                <p>Instalaciones eléctricas de media y baja tensión</p>
                <p><span>Sistemas de tierra</span> <span className='ms-2'>Tableros</span> <span className='ms-2'>Susbestaciones</span></p>
                <p>Mantenimineto y pruebas a transformadores</p>
                <p>Calidad de Energía <span className='ms-5'>Proyectos</span></p>
                <p>Coordinación de protecciones</p>
                <p>Peritaje y Tramites ante CFE</p>
              </div>
            </div>
            <div className="col-6">
              <h3 className='text-center text-warning'>Servicios Industriales</h3>
              <div className='container-service'>
                <p>Mantenimiento a equipos de bombeo</p>
                <p>Compresores de aire, aires acondicionados</p>
                <p>reparación de cilindros neumáticos/hidráulicos</p>
                <p>Unidades hidráulicas, extractores de techo/pared</p>
              </div>
              <div>
                <p className='text-center fs-4'>Visite nuestra pagina en:</p>
                <p className='text-center fs-5'><Link to="/">www.electroserviciosind.com</Link></p>
              </div>
            </div>
          </div>
        </section>
      </article >
    </section >
  );
}