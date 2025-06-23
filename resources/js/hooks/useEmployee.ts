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

    const idEmployee = queryParams.has('id') ? +queryParams.get('id')! : 1;

    getEmployeesById(idEmployee)
      .then(({ data: employee }) => setEmployee(employee))
      .catch(() => setEmployee({
        id: 0,
        email:"",
        fullname: "",
        phone: "",
        prefix: "",
        text:""
      }));

  }, [searchParams]);

  return { employee }
}
