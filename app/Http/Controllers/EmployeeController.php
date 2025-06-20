<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;

class EmployeeController extends Controller
{
    public function index()
    {
        return Employee::all();
    }

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
        return response()->json(Employee::create($validated), 201);
    }

    public function show(string $id)
    {
        $employee = Employee::find($id);

        if (empty($employee))
            return response()->json(["message" => "Usuario no encontrado"], 404);

        return response()->json($employee);
    }

    public function update(Request $request, Employee $empleado)
    {
        $validated = $request->validate([
            'fullname' => 'sometimes|required|string',
            'prefix' => 'sometimes|required|string',
            'phone' => 'sometimes|required|string',
            'email' => 'sometimes|required|email|unique:empleados,email,' . $empleado->id,
            'text' => 'nullable|string',
        ]);
        $empleado->update($validated);
        return $empleado;
    }

    public function destroy(Employee $empleado)
    {
        $empleado->delete();
        return response()->json(['message' => 'Empleado eliminado'], 204);
    }
}
