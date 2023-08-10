<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\PropertyController;
use App\Http\Controllers\AddPropertyController;
use App\Http\Controllers\PropertyAlertController;
use App\Http\Controllers\PropertyRequestController;
use App\Http\Controllers\BookmarkController;
use App\Http\Controllers\ReviewController;
use App\Http\Controllers\Auth\RegisteredUserController;
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

// Route::resource('users', PropertyController::class);



// Route::get('welcome',[AddPropertyController::class,'index']);

Route::get('/', [PropertyController::class,'index'])->name('home');

Route::get('search',[PropertyController::class,'search'])->name('searchResult');

Route::get('for-rent',[PropertyController::class,'rent'])->name('forRent');

Route::get('for-sale',[PropertyController::class,'sale'])->name('forSale');

Route::get('for-shortlet',[PropertyController::class,'shortlet'])->name('forShortlet');

Route::get('location/{location}',[PropertyController::class,'searchState'])->name('searchState');

Route::get('search-location/{cat}/{param}',[PropertyController::class,'searchLocation'])->name('searchLocation');

Route::get('sort-search/{val}',[PropertyController::class,'sortSearch'])->name('sortSearch');

Route::get('sidebar/{category}',[PropertyController::class,'sidebar'])->name('sidebar');

Route::get('property-details/{id}/{s}/{a}',[PropertyController::class,'show'])->name('propertyDetails');

Route::put('property-views/{id}',[AddPropertyController::class,'updateViews'])->name('updatePropertyViews');

Route::put('user-views/{id}',[RegisteredUserController::class,'updateViews'])->name('updateUserViews');

Route::get('alert-Details/{id}',[PropertyAlertController::class, 'show'])->name('alertDetails');

Route::get('request-Details/{id}',[PropertyRequestController::class, 'show'])->name('requestDetails');

//add review
Route::post('request-Details/{id}',[ReviewController::class, 'store'])->name('addReview');

//show review
Route::get('get-reviews/{id}/{type}',[ReviewController::class, 'index'])->name('getReviews');


//show requests
Route::get('requests',[PropertyRequestController::class, 'allRequests'])->name('requests');

//mail users
Route::post('mail-agents',[UserController::class, 'mailAgent'])->name('mailAgent');



Route::get('agents',[UserController::class, 'listAgents'])->name('agents');

Route::get('agents/sort/{param}', [UserController::class, 'sortAgents'])->name('sortAgents');

Route::get('agent-details/{id}',[UserController::class, 'showAgent'])->name('agentDetails');

Route::get('agencies', [UserController::class, 'listAgencies'])->name('agencies');

Route::get('agencies/sort/{param}', [UserController::class, 'sortAgencies'])->name('sortAgencies');

Route::get('agency-details/{id}', [UserController::class, 'showAgency'])->name('agencyDetails');

Route::get('about', function () {
    return Inertia::render('About');
})->name('about');

Route::get('contact', function () {
    return Inertia::render('Contact');
})->name('contact');


Route::get('faq', function () {
    return Inertia::render('Faq');
})->name('faq');




//dashboard routes
require __DIR__.'/dashboard.php';

//authentication routes
require __DIR__.'/auth.php';