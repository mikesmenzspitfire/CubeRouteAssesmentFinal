<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Product;
use App\Category;
use App\categoryProduct;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;



class ProductCategoryController extends Controller
{
    
/**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    

    public function index()
    {
        //
        $category = Category::all();
        $product = Product::all();

        
        
        return view('product-category.index', compact('category', 'product'));
    


        
        
    }
    public function getData(){
        $pageProd = Product::paginate(8);
        return view('/product-category/index', compact('products',[ 'products' => $pageProd]));
      }


 /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * 
     */

    public function store(Request $request)
    {
        
        $PostCat = new categoryProduct;
        $PostCat->product_id = $request->product_id;
        $PostCat->category_id = $request->category_id;
        
        
        $PostCat->save();
        return redirect('admin')->with('status', 'Category added to product!');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //Edit the product category relationship
        $join = DB::table('category_products')
            ->join('products', 'category_products.product_id', '=', 'products.id')
            ->join('categories', 'category_products.category_id', '=', 'categories.id')
            ->select('category_products.*', 'products.id', 'categories.id')
            ->get();

        $products = DB::table('products')
        ->select('id', 'name')
        ->get();

        $category = category::all();
        $category_product = category_product::find($id);
        return view('product-category.edit', compact('category_product', 'products', 'category', 'join'));

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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //Delete the product category relationship
        $category_product = categoryProduct::find($id);
        $category_product->delete();
        return redirect('product-category')->with('status', 'Category removed from product!');
    }


}
