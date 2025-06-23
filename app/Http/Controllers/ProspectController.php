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
                'fullname' => 'require|string',
                'email' => 'require|email',
                'phone' => 'optional|string',
                'message' => 'require|string',
                'whassapp_comunication' => 'optional|boolean'
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
