<?php
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\AddPropertyController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\PropertyController;
use App\Http\Controllers\PropertyAlertController;
use App\Http\Controllers\PropertyRequestController;
use App\Http\Controllers\BookmarkController;
use Inertia\Inertia;


Route::middleware(['auth','verified'])->group(function () {

    //my properties
    Route::get('dashboard/my-properties', [PropertyController::class,'myProperties'])->name('myProperties');

    //agency properties
    Route::get('dashboard/agency-properties', [PropertyController::class,'agencyProperties'])->name('agencyProperties');



    Route::get('dashboard',[UserController::class,'index'])->name('dashboard');

    Route::get('agent-dashboard/{id}/{aid}',[UserController::class,'agentDashboard'])->name('agentDashboard');

    Route::get('agency-dashboard',[UserController::class,'agencyIndex'])->name('agencyDashboard');
    
    Route::get('dashboard/profile',[UserController::class,'profile'])->name('profile');

    Route::delete('dashboard/delete-agent',[UserController::class,'destroy'])->name('deleteAgent');


    //bookmark a property
    Route::get('add-bookmark/{id}',[BookmarkController::class, 'store'])->name('addBookmark');

    //delete a bookmarked property
    Route::get('delete-bookmark/{id}',[BookmarkController::class, 'destroy'])->name('deleteBookmark');
    
    //list my bookmarks
    Route::get('dashboard/bookmarks',[BookmarkController::class, 'index'])->name('bookmarks');


   
    //update a property
    Route::put('dashboard/property/update/{id}', [AddPropertyController::class,'update'])->name('updateProperty');

    //edit property
    Route::get('dashboard/property/{id}/edit', [AddPropertyController::class,'edit'])->name('editProperty');
    
    Route::get('dashboard/add-property', [AddPropertyController::class,'create'])->name('addProperty');
    
    //upload a property
    Route::post('dashboard/submit-property',[AddPropertyController::class, 'store'])->name('submitProperty');
    
    //upload image route
    Route::post('dashboard/uploads',[AddPropertyController::class, 'savePropertyImages'])->name('uploads');

    //delete property image route
    Route::delete('dashboard/deletes/{id}/{name}',[AddPropertyController::class, 'deletePropertyImages'])->name('deletes');
    
    // //get the property upload image page
    // Route::get('dashboard/upload-image', function () {
        
    //     return Inertia::render('Dashboard/PropertyImages');

    // })->name('images');


    //store property alert
    Route::post('dashboard/alert',[PropertyAlertController::class, 'store'])->name('submitPropertyAlert');
    
    //show my list of property alerts
    Route::get('dashboard/my-alerts',[PropertyAlertController::class, 'index'])->name('myAlerts');

    //show create property alert form
    Route::get('dashboard/create-alert',[PropertyAlertController::class, 'create'])->name('createAlert');

    //show edit property alert form
    Route::get('dashboard/property-alert/{id}/edit',[PropertyAlertController::class, 'edit'])->name('editAlert');

    //update an edited property alert
    Route::put('dashboard/update-alert/{id}',[PropertyAlertController::class, 'update'])->name('updateAlert');

    //delete property alert
    Route::delete('dashboard/delete-alert/{id}',[PropertyAlertController::class, 'destroy'])->name('deleteAlert');





    //store property request
    Route::post('dashboard/request',[PropertyRequestController::class, 'store'])->name('submitPropertyRequest');
    
    //show my list of property Requests
    Route::get('dashboard/my-requests',[PropertyRequestController::class, 'index'])->name('myRequests');

    //show create property Request form
    Route::get('dashboard/create-request',[PropertyRequestController::class, 'create'])->name('createRequest');

    //show edit property Request form
    Route::get('dashboard/property-request/{id}/edit',[PropertyRequestController::class, 'edit'])->name('editRequest');

    //update an edited property Request
    Route::put('dashboard/update-request/{id}',[PropertyRequestController::class, 'update'])->name('updateRequest');

    //delete a property request
    Route::delete('dashboard/delete/{id}',[PropertyRequestController::class, 'destroy'])->name('deleteRequest');


    //upload a user image
    Route::post('dashboard/user-image',[RegisteredUserController::class, 'updateUserImage'])->name('userImage');
    
    Route::patch('dashboard/updateUser',[RegisteredUserController::class,'update'])->name('updateUser');

    
});
//superAdmin
Route::middleware(['auth','verified','superAdmin'])->group(function () {

    Route::get('dashboard/pending-properties',[PropertyController::class,'showPendingProperties'])->name('showPendingProperties');

    Route::get('dashboard/deleted-properties',[PropertyController::class,'showDeletedProperties'])->name('showDeletedProperties');

    Route::delete('dashboard/delete-properties/{id}',[PropertyController::class,'destroy'])->name('deleteProperty');

    Route::delete('dashboard/delete-properties-finally/{id}',[PropertyController::class,'delete'])->name('deletePropertyFinally');

    Route::patch('dashboard/approve-property/{id}',[PropertyController::class,'update'])->name('approveProperty');

    Route::patch('dashboard/restore-property/{id}',[PropertyController::class,'restore'])->name('restoreProperty');

});

//admin route
Route::middleware(['auth','verified','admin'])->group(function () {

    Route::get('dashboard/pending-properties',[PropertyController::class,'showPendingProperties'])->name('showPendingProperties');

    Route::delete('dashboard/delete-properties/{id}',[PropertyController::class,'destroy'])->name('deleteProperty');

    Route::patch('dashboard/approve-property/{id}',[PropertyController::class,'update'])->name('approveProperty');

});

