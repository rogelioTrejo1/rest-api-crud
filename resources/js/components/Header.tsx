import { Img } from './Components';

// Imagenes
import Principal from '../images/Principal.jpg';

const Header = () => (
    <header className="container-fluid p-3">
        <h1 className="h1 text-center">Electroservicios Industriales <br /> y Suministros</h1>
        <p className="mt-4 h4 text-center text-black-50">
            <em>¡Calidad y Servicio nos respalda!</em>
        </p>
        <Img src={Principal} className="img" />
        <a href="#Contacto">
            <button type="button" className="centerX btn btn-warning btn-lg mt-3">
                Ponte en Contacto
            </button>
        </a>
    </header>
);

export default Header;