// Keys
import { API_REST } from '@/config/keys.config';

// Interfaces y Tipos
import { ApiResponse } from '@/services/interface/ApiResponce';

// Definción de variables globales 
const URL_API = `${API_REST}/prospects`;

/**
 *
 * @param NewProspect
 * @returns
 */
export async function createNewProspect(NewProspect: NewProspect): Promise<ApiResponse<Prospect>> {
  const resp = await fetch(URL_API);

  if (!resp.ok)
    throw new Error('Error al realizar la petición');

  return resp.json();
}

// Tipos e Interfaces
type Prospect = {
  id: number;
  fullname: string;
  email: string;
  phone: string;
  message: string;
  whatssapp_comunication: boolean;
};

type NewProspect = Omit<Prospect, 'id'>;
