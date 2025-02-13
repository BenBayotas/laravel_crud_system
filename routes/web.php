<?php

use Illuminate\Support\Facades\Route;

Route::get('/{any?}', function () {
    return view('welcome');
})->where('any', '^(?!api).*$');


Route::get('/home', [App\Http\Controllers\UserRoleController::class, 'index'])->name('user_role.index');
Route::get('/create', [App\Http\Controllers\UserRoleController::class, 'create'])->name('user_role.create');
Route::post('/store', [App\Http\Controllers\UserRoleController::class,'store'])->name('user_role.store');
Route::get('/{id}/edit', [App\Http\Controllers\UserRoleController::class,'edit'])->name('user_role.edit');
Route::put('/{id}', [App\Http\Controllers\UserRoleController::class,'update'])->name('user_role.update');
Route::get('/destroy', [App\Http\Controllers\UserRoleController::class, 'destroy'])->name('user_role.destroy');