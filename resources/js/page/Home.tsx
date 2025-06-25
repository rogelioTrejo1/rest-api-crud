// Dependencias
import { useState } from 'react';

// Services
import pensamientos from '@Services/pensamientos.service';
import { ingElectromecanica, serviIndustrial } from '@Services/servicios.service';

// Componentes
import Header from '@Components/Header';
import { Img, IFrame, Pensamientos, Servicio } from '@Components/Components';

//Imagenes
import LogoPrincipal from '@Images/LogotipoFinal.png';
import FormContact from '@Components/FormContact';

const Home = () => {
  // Manejo del Estado de la aplicación
  const [fecha] = useState(new Date());
  const [habilitarFormulario, setHabilitarFormulario] = useState(false);

  const handleClickSección = () => setHabilitarFormulario(!habilitarFormulario);


  return (
    <>
      <Header />
      <main className="mt-4">
        {/* Quienes somos! */}
        <article className="container-fluid">
          <p className="h3 titulos">¿Quienes somos?</p>
          <div className="my-5 col-11 mx-auto mx-2 row">
            <div className="col-md-6" id="Empresa">
              <p className=""><strong>Electroservicios Industriales y suministros,</strong> es una empresa con experiencia de mas de 10 años en el mantenimiento electrico-industrial (mantenimiento a subestaciones, transformadores, instalaciones eléctricas, sistemas de bombeo, torres de enfriamiento, compresores de aire, etc), brindando servicios a la indrustria metal-mecanica tales como: Neturen mexicana, Proveedora y maquiladora de licores, Unipres mexicana, Compas, ZF Chassis Technology Aguascalientes, ZF Chassis Technology San Luis Potosí, Gohsyu Mexicana,  entre otros.</p>
            </div>
            <div className="col-md-6">
              <Img src={LogoPrincipal} className="img-simple" />
            </div>
          </div>
        </article>
        {/* La empresa! */}
        <article className="container-fluid">
          <p className="h3 titulos">La Empresa</p>
          <div className="my-5 row col-11 centerX mx-2">
            {
              pensamientos.map((objec, index) => (
                <Pensamientos
                  src={objec.src}
                  text={objec.text}
                  titulo={objec.titulo}
                  key={index}
                />
              ))
            }
          </div>
        </article>
        {/* Servicios */}
        <article className="container-fluid">
          <p className="h3 titulos">Servicios</p>
          <section>
            <p className="h4 mt-4 text-center">Ingeniería Electromecánica</p>
            <div className="row">
              {
                ingElectromecanica.map((servicio, index) => (
                  <Servicio
                    key={index}
                    title={servicio.titulo}
                    src={servicio.src}
                  />
                ))
              }
            </div>
          </section>
          <section>
            <p className="h4 mt-4 text-center">Servicios Industriales</p>
            <div className="row">
              {
                serviIndustrial.map((servicio, index) => (
                  <Servicio
                    key={index}
                    title={servicio.titulo}
                    src={servicio.src}
                  />
                ))
              }
            </div>
          </section>
        </article>
        {/* Contacto! */}
        <article className="container-fluid" id="Contacto">
          <p className="h3 titulos">Contacto</p>
          <div className="row mx-2">
            <div className="col-lg-5 my-5">
              <div className="w-100">
                <p className="h3 text-center">
                  Comunicate con nosotros
                  <button onClick={handleClickSección} className="btn btn-secondary btn-sm ms-1">
                    <i className="bi bi-arrow-repeat icon-rotate fs-6"></i>
                  </button>
                </p>
                <section className={`seccion-toggle ${habilitarFormulario ? 'seccion-oculta' : ''}`}>
                  <p className="text-center">Gaspar de la Funte #317 Villas de Nuestra Señora de la Asunción, aguascalientes, Aguacalientes, México</p>
                  <p className="text-center">
                    <strong>Oficina: </strong>
                    <span className="text-warning">(01) 449-158-4409</span>
                  </p>
                  <p className="text-center">
                    <strong>Celular: </strong>
                    <span className="text-warning">(044) 449-256-4117</span>
                  </p>
                  <p className="text-center">
                    <strong>Email: </strong>
                    <span className="text-warning">contacto@electroserviciosind.com</span>
                  </p>
                  <p className="h3 text-center">Servicio Industrial</p>
                  <p className="text-center">Estamos a sus ordenes la 24 horas del dia, los 365 dias del año.</p>
                  <div className="form-group">
                    <p className="h3 text-center">Horario de Oficina</p>
                    <select className="form-control border-0" defaultValue={fecha.getDay()}>
                      <option value="1">Lunes. 9:00-18:00</option>
                      <option value="2">Martes. 9:00-18:00</option>
                      <option value="3">Miercoles. 9:00-18:00</option>
                      <option value="4">Jueves. 9:00-18:00</option>
                      <option value="5">Viernes. 9:00-18:00</option>
                      <option value="6">Sabado. 10:00-15:00</option>
                      <option value="0">Domingo. Cerrado</option>
                    </select>
                  </div>
                </section>
                <section className={`seccion-toggle ${!habilitarFormulario ? 'seccion-oculta' : ''}`}>
                  <FormContact />
                </section>
              </div>
            </div>
            <div className="col lg-7 mb-5">
              <IFrame
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7402.339121858151!2d-102.263983!3d21.928032!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8429efd1addc1ba5%3A0xdbbfba3d12a0f9be!2sGaspar%20de%20La%20Fuente%20317%2C%20Villas%20de%20Ntra.%20Sra.%20de%20la%20Asunci%C3%B3n%2C%2020126%20Aguascalientes%2C%20Ags.!5e0!3m2!1ses!2smx!4v1567224945853!5m2!1ses!2smx"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                id="map-Desktop"
              />
            </div>
          </div>
        </article>
        <article className="margin-top-mobil">
          <IFrame
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7402.339121858151!2d-102.263983!3d21.928032!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8429efd1addc1ba5%3A0xdbbfba3d12a0f9be!2sGaspar%20de%20La%20Fuente%20317%2C%20Villas%20de%20Ntra.%20Sra.%20de%20la%20Asunci%C3%B3n%2C%2020126%20Aguascalientes%2C%20Ags.!5e0!3m2!1ses!2smx!4v1567224945853!5m2!1ses!2smx"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            id="map-Mobil"
          />
        </article>
      </main>
    </>
  );
};

export default Home;