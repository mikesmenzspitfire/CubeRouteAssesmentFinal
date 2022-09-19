<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Product;
use App\Category;
use App\ProductVariant;
use Illuminate\Support\Str;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    // public function create(Request $request)
    // {
    //     $product = new Product;
    //     $product->name = 'dog food test many to many';
    //     $product->slug = Str::slug('dog food test many to many');

    //     $product->save();

    //     $category = Category::find([3, 1]);
    //     $product->categories()->attach($category);

    //     return 'Success';
    // }



    public function index()
    {
        
        $products = db::table('products')->paginate(8);
        return view('product.index' , compact('products',['products' => $products]));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    

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
        return redirect('admin.index')->with('status', 'Added Product!!!');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
public function show( $id)
{
    $product = Product::find($id);
        $variants = DB::table('product_variants')
        
        ->select('product_variants.*')
        ->where('product_variants.product_id', '=', $id)
        
        ->get();
        return view('product.show', ['product' => $product, 'variants' => $variants]);
   
}

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //edit the product
        $product = Product::find($id);
        return view('admin.edit', compact('product'));
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
        //delete the product
        $product = Product::find($id);
        $product->delete();
        return redirect('admin.index')->with('status', 'Deleted Product!!!');
    }
}
