// Dependencias
import { Link } from 'react-router-dom';

// Imagenes
import logo from '../images/LogotipoFinal.png';

/**
 *
 * @returns
 */
export default function NotFound() {
  return (
    <article className='container-fluid d-flex flex-column align-items-center justify-content-center vh-100'>
      <div className="row d-flex justify-content-center">
        <div className='col-12 d-flex justify-content-center'>
          <img src={logo} alt="Logo" className="img-fluid mb-4" />
        </div>
        <div className='col-12'>
          <h1 className='display-2 text-uppercase text-warning text-center'>
            <i>404 - Página no encontrada</i>
          </h1>
          <p className='h3 text-center'>Lo sentimos, la página que estás buscando no existe.</p>
          <div className='py-3 d-flex justify-content-center'>
            <Link className='btn btn-warning btn-lg' to="/">Volver a la página de inicio</Link>
          </div>
        </div>
      </div>
    </article >
  );
}