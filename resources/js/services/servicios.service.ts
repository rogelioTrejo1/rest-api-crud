//importtacion de imagenes
import InstalacionesMedianayBaja from '@Images/Intalaciones Media y Baja.jpg';
import MantenimientoSubestacion from '@Images/Mantenimiento a Subestacion.jpg';
import PruebasTransformadores from '@Images/Pruebas a transformadores.jpg';
import Proyectos from '@Images/Proyectos.jpg';
import SistemasTierra from '@Images/Sistemas de tierra.jpeg';
import Cortocircuito from '@Images/Cortocircuito.jpg';
import EquiposBonbeo from '@Images/EQUIPOS DE BOMBEO.jpg';
import Bombas from '@Images/Bombas.jpeg';
import Compresores from '@Images/COMPRESORES.jpg';

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