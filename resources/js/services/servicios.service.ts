//importtacion de imagenes
import InstalacionesMedianayBaja from '../images/Intalaciones Media y Baja.jpg';
import MantenimientoSubestacion from '../images/Mantenimiento a Subestacion.jpg';
import PruebasTransformadores from '../images/Pruebas a transformadores.jpg';
import Proyectos from '../images/Proyectos.jpg';
import SistemasTierra from '../images/Sistemas de tierra.jpeg';
import Cortocircuito from '../images/Cortocircuito.jpg';
import EquiposBonbeo from '../images/EQUIPOS DE BOMBEO.jpg';
import Bombas from '../images/Bombas.jpeg';
import Compresores from '../images/COMPRESORES.jpg';

export const serviIndustrial: Servicios[] = [
    {
        titulo: 'Mantenimiento a equipos de bombeo, equipos de extracción, y aires acondicionados.',
        src: EquiposBonbeo
    },
    {
        titulo: 'Reparación de bombas, cilindros hidraulicos y neumaticos.',
        src: Bombas
    },
    {
        titulo: 'Compresores de aire tipo tornillo, pólizas anuales, mantenimientos programados y reparaciones.',
        src: Compresores
    }
];

export const ingElectromecanica: Servicios[] = [
    {
        titulo: 'Instalaciones electricas de baja y mediana tensión.',
        src: InstalacionesMedianayBaja
    },
    {
        titulo: 'Mantenimiento tableros y subestaciones.',
        src: MantenimientoSubestacion
    },
    {
        titulo: 'Pruebas a trasformadores.',
        src: PruebasTransformadores
    },
    {
        titulo: 'Calidad de energia y proyectos.',
        src: Proyectos
    },
    {
        titulo: 'Sistemas de tierra.',
        src: SistemasTierra
    },
    {
        titulo: 'Calculo de cortocircuito.',
        src: Cortocircuito
    }
];

interface Servicios {
    titulo: string;
    src: string;
}