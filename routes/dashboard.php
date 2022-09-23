<?php
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PropertyController;
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
    
    //upload a property
    Route::post('dashboard/submit-property',[PropertyController::class, 'store'])->name('submit-property');
    
    //upload image route
    Route::post('dashboard/uploads',[PropertyController::class, 'savePropertyImages'])->name('uploads');
    
    //get the property upload image page
    Route::get('dashboard/upload-image', function () {
        
        return Inertia::render('Dashboard/PropertyImages');

    })->name('images');
    
    Route::get('dashboard/my-alerts', function () {
        return Inertia::render('Dashboard/MyAlerts');
    })->name('myAlerts');
    
    Route::get('dashboard/create-alert', function () {
        return Inertia::render('Dashboard/CreateAlert');
    })->name('createAlert');
    
    Route::get('dashboard/my-requests', function () {
        return Inertia::render('Dashboard/MyRequests');
    })->name('myRequests');
    
    Route::get('dashboard/create-request', function () {
        return Inertia::render('Dashboard/CreateRequest');
    })->name('createRequest');
    
});