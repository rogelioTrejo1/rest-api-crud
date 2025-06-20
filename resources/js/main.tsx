//Dependencias
import { createRoot, Root } from "react-dom/client";

//css
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./css/index.scss";

//Aplicacion
import App from "./App";

// Renderizado de la aplicación
const container: HTMLDivElement = document.querySelector<HTMLDivElement>('#root')!;
const root: Root = createRoot(container);
root.render(<App />);
