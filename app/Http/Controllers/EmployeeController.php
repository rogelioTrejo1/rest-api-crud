<?php

namespace App\Http\Controllers;

use App\Models\Employee;

use Illuminate\Http\Request;

class EmployeeController extends Controller
{
    /**
     * 
     */
    public function index()
    {
        return Employee::all();
    }

    /**
     * @param string $id Identificador del empleado a buscar
     * @return Employee Modelo del empleado
     */
    public function show($id)
    {
        $employee = Employee::find($id);

        if (!$employee)
            return response()->json([
                "message" => "Usuario no encontrado"
            ], 404);

        return response()->json($employee);
    }

    /**
     * 
     */
    public function store(Request $request)
    {
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
            return response()->json([
                "message" => "No se pudo realizar el registro de empleado"
            ], 400);

        return response()->json($newEmployee, 201);
    }

    /**
     * 
     */
    public function destroy($id)
    {
        $employee = Employee::find($id);

        if (!$employee)
            return response()->json([
                "message" => "Usuario no encontrado"
            ], 404);

        $employee->delete();

        return response()->noContent();
    }
}
