// Keys
import { API_REST } from '@Config/keys.config';

// Interfaces y Tipos
import { ApiResponse } from '@Services/interface/ApiResponce';

// Definción de variables globales 
const URL_API = `${API_REST}/employees`;

/**
 *
 * @returns
 */
export async function getAllEmployees(): Promise<ApiResponse<Employee[]>> {
  const resp = await fetch(URL_API);

  if (!resp.ok)
    throw new Error('Error al realizar la petición');

  return resp.json();
}

/**
 *
 * @param id
 * @returns
 */
export async function getEmployeesById(id: number): Promise<ApiResponse<Employee>> {
  const resp = await fetch(`${URL_API}/${id}`);

  if (!resp.ok) {
    throw new Error('Error al realizar la petición');
  }

  return resp.json();
}

// Tipos e Interfaces
export type Employee = {
  id: number;
  fullname: string;
  prefix: string;
  phone: string;
  email: string;
  text: string;
};