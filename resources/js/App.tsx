// Dependencias
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Paginas
import Home from '@/page/Home';
import TargetaPresentacion from '@/page/TargetaPresentacion';
import NotFound from '@/page/NotFound';

/**
 * 
 * @returns 
 */
export function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Rutas de la aplicación */}
                <Route index element={<Home />} />
                <Route path='/presentacion' element={<TargetaPresentacion />} />

                {/* Ruta para manejar páginas no encontradas */}
                <Route path='*' element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;