<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::inertia('/', 'Home')->name('home');

Route::inertia('/news', 'News')->name('news');

Route::inertia('/about', 'About')->name('about');

Route::inertia('/gallery', 'Gallery')->name('gallery');

Route::inertia('/education', 'Education')->name('Education');










require __DIR__.'/auth.php';
