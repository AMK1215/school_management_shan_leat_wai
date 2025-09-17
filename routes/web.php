<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('test');
});

Route::get('/test', function () {
    return view('test');
});

// Auth Routes
Route::get('/login', function () {
    return view('auth.login');
})->name('login');

// Dashboard Routes (for testing)
Route::get('/dashboard/admin', function () {
    return view('dashboard.admin');
})->name('dashboard.admin');

Route::get('/dashboard/teacher', function () {
    return view('dashboard.teacher');
})->name('dashboard.teacher');

Route::get('/dashboard/student', function () {
    return view('dashboard.student');
})->name('dashboard.student');

Route::get('/dashboard/parent', function () {
    return view('dashboard.parent');
})->name('dashboard.parent');

Route::get('/dashboard/guardian', function () {
    return view('dashboard.guardian');
})->name('dashboard.guardian');