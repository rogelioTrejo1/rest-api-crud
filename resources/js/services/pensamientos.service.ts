//Importacion de imagenes
import Mision from '../images/Mision.jpg';
import Vision from '../images/Vision.jpg';

const pensamientos: IPensamientos[] = [
    {
        titulo: 'Visión',
        text: 'Ser lideres reconocidos por nuestra divercificación de servicios innovando y gozando de la lealtad de nuestros clientes y colaboradores.',
        src: Mision
    },
    {
        titulo: 'Misión',
        text: 'Satisfacer las nesesidades de nuestros clientes siendo una empresa ética y rentable.',
        src: Vision
    }
];

interface IPensamientos {
    titulo: string;
    text: string;
    src: string;
}

export default pensamientos;