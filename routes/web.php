<?php

use App\Http\Controllers\FollowController;
use App\Http\Controllers\PhotoController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// middleware lang is applied on all these routes

require __DIR__.'/auth.php';

Route::get('/', function () {
    return Inertia::render('Unused/MainRoutes', [
        'routes' => [
            ['name' => 'login', 'path' => route('login')],
            ['name' => 'register', 'path' => route('register')], 
            ['name' => 'dashboard', 'path' => route('dashboard')],
            ['name' => 'profile', 'path' => route('profile.edit')],
            ['name' => 'users', 'path' => route('user.index')],
        ],
    ]);
})->name('landing');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::controller(UserController::class)->group(function(){
    Route::get('/users', 'index')->name('user.index');
    Route::get('/users/following', 'following')->name('user.following');
    Route::get('/users/search', 'search')->name('user.search');
    Route::get('/users/{user}', 'show')->name('user.show');
    Route::post('/users/search', 'searchResult')->name('user.result');
});

Route::resource('photos', PhotoController::class)->only(['index', 'create', 'store','show','destroy']);

Route::post('/toggle-follow', FollowController::class)->name('follow.toggle');
