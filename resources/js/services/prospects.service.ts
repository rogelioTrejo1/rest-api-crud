// Keys
import { API_REST } from '@/config/keys.config';

// Interfaces y Tipos
import { ApiResponse } from '@/services/interface/ApiResponce';

// Definción de variables globales 
const URL_API = `${API_REST}/prospects`;
const headers = new Headers();
headers.append('Content-Type', 'application/json');

/**
 *
 * @param NewProspect
 * @returns
 */
export async function createNewProspect(newProspect: CreateProspect): Promise<ApiResponse<Prospect>> {
  const resp = await fetch(URL_API, {
    method: 'POST',
    body: JSON.stringify(newProspect),
    headers
  });

  if (!resp.ok)
    throw new Error('Error al realizar la petición');

  return resp.json();
}

// Tipos e Interfaces
export type Prospect = {
  id: number;
  fullname: string;
  email: string;
  phone: string;
  message: string;
  whatssapp_comunication?: boolean;
};
export type CreateProspect = Omit<Prospect, 'id'>;