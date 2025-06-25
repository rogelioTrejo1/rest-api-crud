<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

use App\ApiResponse;
use App\Models\Prospect;

class ProspectController extends Controller
{
    use ApiResponse;

    public function index()
    {
        return $this->success(Prospect::all());
    }

    public function store(Request $request)
    {
        try {
            $validated = $request->validate([
                'fullname' => 'required|string',
                'email' => 'required|email',
                'phone' => 'nullable|string',
                'message' => 'required|string',
                'whatssapp_comunication' => 'nullable|boolean',
            ]);

            $newProspect = Prospect::create($validated);
            if (!$newProspect)
                return $this->error('No se pudo realizar el registro de empleado');

            return $this->success($newProspect, 201);
        } catch (ValidationException $e) {
            return $this->error('Datos invalidos', 422, $e->errors());
        } catch (\Throwable $e) {
            return $this->error('Ocurrió un error inesperado', 500, [
                'exception' => $e->getMessage()
            ]);
        }
    }
}
