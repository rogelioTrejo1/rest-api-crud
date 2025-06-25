// Dependencias
import { useState, FormEvent, useRef } from 'react';

// Hooks
import { useProspect, type CreateProspect } from '@/hooks/useProspect';


/**
 * 
 * @returns 
 */
function FormContact() {
  const [prospect, setPropect] = useState<CreateProspect>();
  const formContact = useRef<HTMLFormElement>(null);
  const { loading: loadingProspect, error: errorProspect, createProspect } = useProspect();

  /**
   *
   * @param e
   */
  const handleSubmitFormContact = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e.target);
  };

  return (
    <form id="form-contact" ref={formContact} onSubmit={handleSubmitFormContact}>
      <div className="mb-3">
        <label htmlFor="fullname-input" className="form-label">Nombre Completo *</label>
        <input
          type="text"
          className="form-control"
          id="fullname-input"
          name='fullname'
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
          name='email'
          placeholder="Escribe tu correo electrónico"
          autoComplete="off"
          required

        />
      </div>
      <div className="mb-3">
        <label htmlFor="phoneElement" className="form-label">Telefono *</label>
        <input
          type="tel"
          className="form-control"
          id="phoneElement"
          name='phone'
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
            name='whatssapp_comunication'
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