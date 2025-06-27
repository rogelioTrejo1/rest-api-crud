<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\ProspectController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/ping', function () {
    return response()->json([
        "pong"
    ]);
});

// Creacion de Rutas para empleados
Route::controller(EmployeeController::class)->group(function () {
    Route::prefix("/employees")->group(function () {
        Route::get('/', 'index');
        Route::post('/', 'store');
        Route::get('/{id}', 'show');
        Route::delete('/{id}', 'destroy');
    });
});

// Rutas de prospectos
Route::controller(ProspectController::class)->group(function () {
    Route::prefix("/prospects")->group(function () {
        Route::get("/", "index");
        Route::post("/", "store");
        Route::patch("/{id}/communication", 'updateCommunication');
    });
});
