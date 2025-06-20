/**
 *
 * @returns
 */
export function getAllEmployees(): Promise<Employee[]> {
  return fetch('/people.json')
  .then(resp => {
    if (!resp.ok) throw new Error('Error al traer los datos');

    return resp.json();
  })
}

/**
 *
 * @param id
 * @returns
 */
export async function getEmployeesById(id: number): Promise<Employee> {
  const employees = await getAllEmployees();

  console.log(employees)
  
  return employees.find(employee=> employee.id === id) || employees[0];
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