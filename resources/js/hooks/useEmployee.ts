// Dependencias
import { useState, useEffect } from "react";

// Servicios
import { type Employee, getEmployeesById } from '../services/employees.service';

/**
 *
 * @param id
 * @returns
 */
export function useEmployee(searchParams: string) {
  const [employee, setEmployee] = useState<Employee>();

  useEffect(() => {
    const queryParams = new URLSearchParams(searchParams);

    const idEmployee = queryParams.has('id') ? +queryParams.get('id')! : 0;

    getEmployeesById(idEmployee)
      .then(employee => setEmployee(employee));

  }, [searchParams]);

  return { employee }
}
