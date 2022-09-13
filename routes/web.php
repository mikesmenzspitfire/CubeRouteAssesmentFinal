<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProductCategoryController;
use App\Http\Middleware\Authenticate;



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



Route::group(['middleware' => ['auth']], function() {
    Route::get('/', [ProductController::class, 'index']);
    
 });

 Route::auth('login', 'Auth\LoginController');




/*
|--------------------------------------------------------------------------
| Product Routes
|--------------------------------------------------------------------------
|
*/

    // GET
Route::get('/products', [ProductController::class, 'index']);
Route::get('/products/{id}', [ProductController::class, 'show']);

// POST
Route::post('/products', [ProductController::class, 'store']);
Route::post('/products/{id}', [ProductController::class, 'update']);

// DELETE
Route::delete('/products/{id}', [ProductController::class, 'destroy']);

// PUT
Route::put('/products/{id}', [ProductController::class, 'update']);

/*
|--------------------------------------------------------------------------
| Product Category Relationship Routes
|--------------------------------------------------------------------------
|
*/

// GET
Route::get('/product-category', [ProductCategoryController::class, 'index']);

// STORE

Route::post('/product-category', [ProductCategoryController::class, 'store']);

// DELETE
Route::delete('/product-category/{id}', [ProductCategoryController::class, 'destroy']);

// PUT
Route::put('/product-category/{id}', [ProductCategoryController::class, 'update']);



/*
|--------------------------------------------------------------------------
| Category Routes
|--------------------------------------------------------------------------
|
*/
    
        // GET
Route::get('/categories', [CategoryController::class, 'index']);
Route::get('/categories/{id}', [CategoryController::class, 'show']);

// POST
Route::post('/categories', [CategoryController::class, 'store']);
Route::post('/categories/{id}', [CategoryController::class, 'update']);

// DELETE
Route::delete('/categories/{id}', [CategoryController::class, 'destroy']);

// PUT
Route::put('/categories/{id}', [CategoryController::class, 'update']);

/*

/*
|--------------------------------------------------------------------------
| Product Variant Routes
|--------------------------------------------------------------------------
|
*/

    // GET
Route::get('/product-variants', [ProductVariantController::class, 'index']);
Route::get('/product-variants/{id}', [ProductVariantController::class, 'show']);

// POST
Route::post('/product-variants', [ProductVariantController::class, 'store']);
Route::post('/product-variants/{id}', [ProductVariantController::class, 'update']);

// DELETE
Route::delete('/product-variants/{id}', [ProductVariantController::class, 'destroy']);

// PUT
Route::put('/product-variants/{id}', [ProductVariantController::class, 'update']);

/*

/*
|--------------------------------------------------------------------------
| Product Relationship Routes
|--------------------------------------------------------------------------
|
*/

    // GET
Route::get('/product-relationships', [ProductRelationshipController::class, 'index']);
Route::get('/product-relationships/{id}', [ProductRelationshipController::class, 'show']);

// POST
Route::post('/product-relationships', [ProductRelationshipController::class, 'store']);
Route::post('/product-relationships/{id}', [ProductRelationshipController::class, 'update']);

// DELETE
Route::delete('/product-relationships/{id}', [ProductRelationshipController::class, 'destroy']);

// PUT
Route::put('/product-relationships/{id}', [ProductRelationshipController::class, 'update']);






Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');



Route::middleware('auth')->group(function () {
    Route::view('about', 'about')->name('about');

    Route::get('users', [\App\Http\Controllers\UserController::class, 'index'])->name('users.index');

    Route::get('profile', [\App\Http\Controllers\ProfileController::class, 'show'])->name('profile.show');
    Route::put('profile', [\App\Http\Controllers\ProfileController::class, 'update'])->name('profile.update');
});
