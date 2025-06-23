/**
 * 
 * @returns 
 */
function FormContact() {
  return (
    <form id="form-contact">
      <div className="mb-3">
        <label htmlFor="fullname-input" className="form-label">Nombre Completo *</label>
        <input
          type="text"
          className="form-control"
          id="fullname-input"
          placeholder="Escribe tu nombre completo"
          autoComplete="off"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="floatingEmail" className="form-label">Correo electrónico</label>
        <input
          type="email"
          className="form-control"
          id="floatingEmail"
          placeholder="Escribe tu correo electrónico"
          autoComplete="off"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="floatingPassword" className="form-label">Telefono *</label>
        <input
          type="tel"
          className="form-control"
          id="floatingPassword"
          placeholder="Escribe tu telefono"
          autoComplete="off"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="floatingMessage" className="form-label">Mensaje *</label>
        <textarea
          name="message"
          id="floatingMessage"
          className="form-control"
          placeholder="Escribe en que te podemos ayudar"
          autoComplete="off"
          rows={5}
          required
        ></textarea>
      </div>
      <div className="mb-3">
        <div className="form-check form-switch mb-2">
          <input
            className="form-check-input"
            type="checkbox"
            id="flexSwitchCheckDefault"
            required
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            ¿Autoriza el uso de su telefono para comunicacion de whatsapp?
          </label>
        </div>
        {/* Crear un boton chebox que autoriza el uso del telefono para comunicacion de whatsapp */}
        <button
          type="submit"
          className="btn btn-lg btn-warning w-100"
        >
          Enviar
        </button>
      </div>
    </form>
  );
}

export default FormContact;