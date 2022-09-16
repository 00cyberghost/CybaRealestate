<?php
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::middleware(['auth'])->group(function () {

    Route::get('dashboard', function () {
        return Inertia::render('Dashboard/Dashboard');
    })->name('dashboard');
    
    Route::get('dashboard/profile', function () {
        return Inertia::render('Dashboard/Profile');
    })->name('profile');
    
    Route::get('dashboard/my-properties', function () {
        return Inertia::render('Dashboard/MyProperties');
    })->name('myProperties');
    
    Route::get('dashboard/bookmarks', function () {
        return Inertia::render('Dashboard/Bookmarks');
    })->name('bookmarks');
    
    Route::get('dashboard/add-property', function () {
        return Inertia::render('Dashboard/AddProperty');
    })->name('addProperty');
    
    Route::get('dashboard/my-alerts', function () {
        return Inertia::render('Dashboard/MyAlerts');
    })->name('myAlerts');
    
    Route::get('dashboard/create-alert', function () {
        return Inertia::render('Dashboard/CreateAlert');
    })->name('createAlert');
    
    Route::get('dashboard/my-requests', function () {
        return Inertia::render('Dashboard/MyRequests');
    })->name('myRequests');
    
    Route::get('dashboard/createequest', function () {
        return Inertia::render('Dashboard/CreateRequest');
    })->name('createRequest');
    
});