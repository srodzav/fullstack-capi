<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactController;

// definir rutas para api

Route::middleware('api')->group(function () {
    Route::resource('contacts', ContactController::class);
});
