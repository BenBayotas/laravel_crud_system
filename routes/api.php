<?php
use App\Http\Controllers\BookController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CampCatalougeController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:api');

Route::apiResource('book', BookController::class);
Route::apiResource('camp', CampCatalougeController::class);
Route::post('/camp/{id}/restore', [CampCatalougeController::class, 'restoreCamp']);
