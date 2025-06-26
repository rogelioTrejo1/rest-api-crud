// Dependencias
import { useState, useEffect } from 'react';

// Servicios
import { type Employee, getEmployeesById } from '@Services/employees.service';

/**
 *
 * @param id
 * @returns
 */
export function useEmployee(searchParams: string) {
  const [error, setError] = useState(true);
  const [employee, setEmployee] = useState<Employee>();

  useEffect(() => {
    const queryParams = new URLSearchParams(searchParams);

    const idEmployee = queryParams.has('id') ? +queryParams.get('id')! : 1;

    getEmployeesById(idEmployee)
      .then(({ data: employee }) => {
        setEmployee(employee);
        setError(false);
      })
      .catch(() => setError(true));

  }, [searchParams]);

  return { employee, error };
}
