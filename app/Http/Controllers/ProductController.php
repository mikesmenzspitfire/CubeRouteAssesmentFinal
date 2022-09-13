<?php

namespace App\Http\Controllers;

use App\Categories;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Product;
use Illuminate\Support\Str;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // Get all products
        
        $productsShow =DB::table('products')
        
        ->select('*')
          
          ->get();
        //   get all categories related to product
        $categories = DB::table('categories')
        ->join('category_products', 'categories.id', '=', 'category_products.category_id')
        ->join('products', 'category_products.product_id', '=', 'products.id')
        ->select('categories.name')
        ->get();
          
        return view('/products/products' , ['products' => $productsShow, 'categories' => $categories]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // slugify the name
        
        $PostCat = new Product;
        
        $slug = Str::slug($request->name, '-');
        $PostCat->name = $request->name;
        $PostCat->slug = $slug;
        


        
        
        // store the product
        $PostCat->save();
        return redirect('product-category')->with('status', 'Added Product!!!');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        

        // Show selected product
        $product = Product::find($id);
        $variants = DB::table('product_variants')
        
        ->select('product_variants.*')
        ->where('product_variants.product_id', '=', $id)
        
        ->get();
        return view('/products/product', ['product' => $product, 'variants' => $variants]);
        

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $PostCat = new Product;
        $slug = Str::slug($request->name, '-');
        $PostCat->id = $id;
        $PostCat->name = $request->name;
        $PostCat->slug = $slug;

        $PostCat->update();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
