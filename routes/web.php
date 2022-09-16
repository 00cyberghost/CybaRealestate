<?php

use Illuminate\Foundation\Application;
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

Route::get('/', function () {
    return Inertia::render('Home');
})->name('home');

Route::get('search-result', function () {
    return Inertia::render('SearchResult');
})->name('searchResult');

Route::get('property-Details', function () {
    return Inertia::render('PropertyDetails');
})->name('propertyDetails');

Route::get('agents', function () {
    return Inertia::render('Agents');
})->name('agents');

Route::get('agent-details', function () {
    return Inertia::render('AgentDetails');
})->name('agentDetails');

Route::get('agencies', function () {
    return Inertia::render('Agencies');
})->name('agencies');

Route::get('agency-details', function () {
    return Inertia::render('AgencyDetails');
})->name('agencyDetails');

Route::get('about', function () {
    return Inertia::render('About');
})->name('about');

Route::get('contact', function () {
    return Inertia::render('Contact');
})->name('contact');

Route::get('requests', function () {
    return Inertia::render('Requests');
})->name('requests');

Route::get('faq', function () {
    return Inertia::render('Faq');
})->name('faq');

//dashboard routes
require __DIR__.'/dashboard.php';

//authentication routes
require __DIR__.'/auth.php';