<?php

namespace App\Http\Controllers;

use App\ApiResponse;
use App\Models\Employee;

use Illuminate\Validation\ValidationException;
use Illuminate\Http\Request;

class EmployeeController extends Controller
{
    use ApiResponse;

    /**
     *
     */
    public function index()
    {
        return $this->success(Employee::all());
    }

    /**
     * @param string $id Identificador del empleado a buscar
     * @return Employee Modelo del empleado
     */
    public function show($id)
    {
        $employee = Employee::find($id);

        if (!$employee)
            return $this->error('Usuario no encontrado', 404);

        return $this->success($employee);
    }

    /**
     * 
     */
    public function store(Request $request)
    {
        try {
            $validated = $request->validate([
                'fullname' => 'required|string',
                'prefix' => 'required|string',
                'phone' => 'required|string',
                'email' => 'required|email|unique:employees,email',
                'text' => 'nullable|string',
            ], [
                'email.unique' => 'Este correo ya está registrado para otro empleado.',
            ]);

            $newEmployee = Employee::create($validated);

            if (!$newEmployee)
                return $this->error('No se pudo realizar el registro de empleado');

            return $this->success($newEmployee, 201);
        } catch (ValidationException $e) {
            return $this->error('Datos invalidos', 422, $e->errors());
        } catch (\Throwable $e) {
            return $this->error('Ocurrió un error inesperado', 500, [
                'exception' => $e->getMessage()
            ]);
        }
    }

    /**
     * 
     */
    public function destroy($id)
    {
        $employee = Employee::find($id);

        if (!$employee)
            return $this->error('Employee no encontrado', 404);

        $employee->delete();

        return $this->success(null, 204);
    }
}
