<?php

namespace App;

use Illuminate\Http\JsonResponse;

trait ApiResponse
{
    /**
     * @param array $data Cuerpo de la peticion de respuesta
     * @param string $message Mensaje definico para los clientes
     * @param int $code Codigo de Estatus del cliente
     * @return JsonResponse Respuesta HTTP para el cliente
     */
    protected function success($data = null, int $code = 200, string $message = 'OK',): JsonResponse
    {
        return response()->json([
            'status' => 'success',
            'message' => $message,
            'data' => $data
        ], $code);
    }

    /**
     * @param mix $data Cuerpo de la peticion de respuesta
     * @param string $message Mensaje definico para los clientes
     * @param int $code Codigo de Estatus del cliente
     * @return JsonResponse Respuesta HTTP para el cliente
     */
    protected function error(string $message = 'Error', int $code = 400, $data = null): JsonResponse
    {
        return response()->json([
            'status' => 'error',
            'message' => $message,
            'data' => $data
        ], $code);
    }
}
