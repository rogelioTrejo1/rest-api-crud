// Dependencias
import Swal from 'sweetalert2';
import { useState, type FormEvent } from 'react';

// Hooks
import { type CreateProspect, useProspect } from '@Hooks/useProspect';

/**
 *
 * @returns
 */
function FormContact() {
  // Definición de hooks
  const { createProspect } = useProspect();

  // Definicion de Estados del componente
  const [newProspect, setNewProspect] = useState<CreateProspect>({
    email: '',
    fullname: '',
    message: '',
    phone: '',
    whatssapp_comunication: false
  });
  const [invalidElements, setInvalidElements] = useState({
    fullname: false,
    email: false,
    phone: false,
    message: false
  });

  /**
   *
   * @param e
   */
  const handleChangeInvalidInput = (e: HandleInputChange) => {
    const nameInput = e.currentTarget.name;
    const inputValue = e.currentTarget.value;

    setInvalidElements(prevState => ({ ...prevState, [nameInput]: false }));
    setNewProspect(prevState => ({ ...prevState, [nameInput]: inputValue }));
  };

  /**
   *
   * @param e
   */
  const handleSubmitForm = async (e: HandleFormSubmit) => {
    e.preventDefault();

    Swal.fire({
      title: 'Enviando mensaje...',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });

    await createProspect(newProspect);

    Swal.fire('¡Enviado!', 'Tu mensaje fue recibido.', 'success');

    // Se establece reset del
    setNewProspect({
      email: '',
      fullname: '',
      message: '',
      phone: '',
      whatssapp_comunication: false
    });
  };

  return (
    <form id="form-contact" onSubmit={handleSubmitForm}>
      <div className={`mb-3 ${invalidElements.fullname && 'has-danger'}`}>
        <label htmlFor="fullname-input" className="form-label">Nombre Completo *</label>
        <input
          type="text"
          className={`form-control ${invalidElements.fullname && 'is-invalid'}`}
          id="fullname-input"
          name='fullname'
          value={newProspect.fullname}
          placeholder="Escribe tu nombre completo"
          autoComplete="off"
          required

          onInvalid={() => setInvalidElements(preValues => ({ ...preValues, fullname: true }))}
          onChange={handleChangeInvalidInput}
        />
        <div className="invalid-feedback">El Campo es requerido para tu mensaje</div>
      </div>
      <div className={`mb-3 ${invalidElements.email && 'has-danger'}`}>
        <label htmlFor="floatingEmail" className="form-label">Correo electrónico</label>
        <input
          type="email"
          className={`form-control ${invalidElements.email && 'is-invalid'}`}
          id="floatingEmail"
          name='email'
          value={newProspect.email}
          pattern='^[\\w.-]+@[a-zA-Z\\d.-]+\\.[a-zA-Z]{2,}$'
          placeholder="Escribe tu correo electrónico"
          autoComplete="off"
          required

          onInvalid={() => setInvalidElements(preValues => ({ ...preValues, email: true }))}
          onChange={handleChangeInvalidInput}
        />
        <div className="invalid-feedback">El Campo es requerido o no cumple el formato</div>
      </div>
      <div className={`mb-3 ${invalidElements.phone && 'has-danger'}`}>
        <label htmlFor="phoneElement" className="form-label">Telefono *</label>
        <input
          type="tel"
          className={`form-control ${invalidElements.phone && 'is-invalid'}`}
          id="phoneElement"
          name='phone'
          value={newProspect.phone}
          placeholder="Escribe tu telefono"
          autoComplete="off"
          required={newProspect.whatssapp_comunication}
          pattern='^[2-9][0-9]{9}$'

          onInvalid={() => setInvalidElements(preValues => ({ ...preValues, phone: true }))}
          onChange={handleChangeInvalidInput}
        />
        <div className="invalid-feedback">¡El numero de telefono no se ingreso o es incorrecto!</div>
      </div>
      <div className={`mb-3 ${invalidElements.message && 'has-danger'}`}>
        <label htmlFor="floatingMessage" className="form-label">Mensaje *</label>
        <textarea
          name="message"
          id="floatingMessage"
          value={newProspect.message}
          className={`form-control ${invalidElements.message && 'is-invalid'}`}
          placeholder="Escribe en que te podemos ayudar"
          autoComplete="off"
          rows={5}
          required

          onInvalid={() => setInvalidElements(preValues => ({ ...preValues, message: true }))}
          onChange={handleChangeInvalidInput}
        ></textarea>
        <div className="invalid-feedback">El Campo es requerido para tu mensaje</div>
      </div>
      <div className="mb-3">
        <div className="form-check form-switch mb-2">
          <input
            className="form-check-input"
            type="checkbox"
            id="flexSwitchCheckDefault"
            name='whatssapp_comunication'
            checked={newProspect.whatssapp_comunication}
            onChange={() => setNewProspect(prevState => ({ ...prevState, whatssapp_comunication: !prevState.whatssapp_comunication }))}
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

// Definición de Interfaces y tipos
type HandleInputChange = FormEvent<HTMLInputElement | HTMLTextAreaElement>
type HandleFormSubmit = FormEvent<HTMLFormElement>

export default FormContact;