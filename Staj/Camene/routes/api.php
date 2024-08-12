<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::post('/contact', [
    \App\Http\Controllers\ContactController::class,
    'submit',
]);
Route::get('/home-sliders', [
    \App\Http\Controllers\HomeController::class,
    'getHomeSlider',
]);
Route::get('/all-project', [
    \App\Http\Controllers\ProjectController::class,
    'getProjects',
]);
Route::get('/project/{slug}', [
    \App\Http\Controllers\ProjectController::class,
    'getByProject',
]);
Route::get('/all-plans', [
    \App\Http\Controllers\ProjectController::class,
    'getPlans',
]);
Route::get('/get-galleries', [
    \App\Http\Controllers\HomeController::class,
    'getGalleries',
]);