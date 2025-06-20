import { CSSProperties, JSX } from "react";

/**
 * Img: Se genera un elemento tipo HTMLImageElement para su uso
 * @param { IImg } props 
 */
export const Img = (props: IImg): JSX.Element => {
    return (
        <img
            src={props.src}
            alt={props.alt}
            className={props.className}
            loading="lazy"
        />
    );
};

interface IImg {
    src?: string | undefined;
    alt?: string | undefined;
    className?: string | undefined;
}

/**
 * IFrame: Se genera un componente de tipo HTMLIFrameElement para su uso
 * @param {IIFrame} props 
 */
export const IFrame = (props: IIFrame): JSX.Element => {
    return (
        <iframe
            src={props.src}
            width={props.width}
            height={props.height}
            style={props.style}
            id={props.id}
            title={props.title}
        ></iframe>
    );
};

interface IIFrame {
    src?: string | undefined;
    width?: string | number | undefined;
    height?: string | number | undefined;
    style?: CSSProperties | undefined;
    id?: string | undefined;
    title?: string | undefined;
}

/**
 * Servicio: Se crea un componente donde se muestran los servicios de la empresa.
 * @param {IServicio} props 
 */
export const Servicio = (props: IServicio): JSX.Element => {
    return (
        <div className="col-lg-4 col-md-6 mb-3">
            <div className="img-gal">
                <div className="title">
                    <p className="h5 text-center">{props.title}</p>
                </div>
                <Img src={props.src} className="img" />
            </div>
        </div>
    );
};

interface IServicio {
    title: string | undefined;
    src: string | undefined;
}

/**
 * Pensamientos: Se genera un componente donde se plasman los pensamientos que se tiene en la empresa 
 * @param {IPensamientos} props 
 */
export const Pensamientos = (props: IPensamientos): JSX.Element => {
    return (
        <div className="col-md-6">
            <Img className="img-thumbnail img-fluid" src={props.src} />
            <p className="mt-3 h3 text-center">{props.titulo}</p>
            <p className="text-center">{props.text}</p>
        </div>
    );
};

interface IPensamientos {
    src: string | undefined;
    titulo: string | undefined;
    text: string | undefined;
}
