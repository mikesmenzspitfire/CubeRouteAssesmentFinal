<?php

use App\Http\Controllers\Categories;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\DB;

use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProductAdminController;
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

// Include Categories in header
Route::get('/', function () {
    $categories = DB::table('categories')->get();
    return view('home', ['categories' => $categories]);
});




/*
|--------------------------------------------------------------------------
| Product Routes
|--------------------------------------------------------------------------
|
*/

    // GET
Route::get('/products', [ProductController::class, 'index']);
Route::get('/products/{id}', [ProductController::class, 'show']);
Route::get('product/create', 'ProductController@create')->name('product.create');
Route::get('product/{product}', 'ProductController@show')->name('product.show');
// POST
Route::post('/products', [ProductController::class, 'store']);
Route::post('/products/{id}', [ProductController::class, 'update']);

// DELETE
Route::delete('/products/{id}', [ProductController::class, 'destroy']);

// PUT
Route::put('/products/{id}', [ProductController::class, 'update']);

/*
|--------------------------------------------------------------------------
| Product Categories Relationship Routes
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
Route::get('/categories', [Categories::class, 'index']);
Route::get('/categories/{id}', [Categories::class, 'show']);

// create
Route::get('/categories/create', [Categories::class, 'create']);



// POST
Route::post('/categories', [Categories::class, 'store']);
Route::post('/categories/{id}', [Categories::class, 'update']);

// DELETE
Route::delete('/categories/{id}', [Categories::class, 'destroy']);

// PUT
Route::put('/categories/{id}', [Categories::class, 'update']);

// EDIT
Route::get('/categories/{id}/edit', [Categories::class, 'edit']);

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


// Admin Routes
Route::group(['middleware' => ['auth']], function() {
    Route::get('/admin', [ProductAdminController::class, 'index']);
    Route::get('/admin/products', [ProductAdminController::class, 'index']);
    Route::get('/admin/products/create', [ProductAdminController::class, 'create']);
    Route::get('/admin/products/{id}', [ProductAdminController::class, 'show']);
    Route::get('/admin/products/{id}/edit', [ProductAdminController::class, 'edit']);
    Route::post('/admin/store', [ProductAdminController::class, 'store']);
    Route::put('/admin/products/{id}', [ProductAdminController::class, 'update']);
    Route::delete('/admin/products/{id}', [ProductAdminController::class, 'destroy']);
});

// Include Categories in header





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


/*
|--------------------------------------------------------------------------
| Product Admin Routes
|--------------------------------------------------------------------------
|
*/
    
// GET
Route::get('/admin', [ProductAdminController::class, 'adminCategory']);

// POST
Route::post('/admin', [ProductAdminController::class, 'store']);
Route::post('/admin/{id}', [ProductAdminController::class, 'update']);

// DELETE
Route::delete('/admin/{id}', [ProductAdminController::class, 'destroy']);

// PUT
Route::put('/admin/{id}', [ProductAdminController::class, 'update']);

// EDIT
Route::get('/admin/{id}/edit', [ProductAdminController::class, 'edit']);





Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');



Route::middleware('auth')->group(function () {
    Route::view('about', 'about')->name('about');

    Route::get('users', [\App\Http\Controllers\UserController::class, 'index'])->name('users.index');

    Route::get('profile', [\App\Http\Controllers\ProfileController::class, 'show'])->name('profile.show');
    Route::put('profile', [\App\Http\Controllers\ProfileController::class, 'update'])->name('profile.update');
});
