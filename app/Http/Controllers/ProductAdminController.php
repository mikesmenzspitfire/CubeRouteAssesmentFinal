<?php

namespace App\Http\Controllers;
use App\Category;
use App\Product;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\ProductController;
use App\categoryProduct;
use Illuminate\Support\str;
use Illuminate\Http\Request;






class ProductAdminController extends ProductController
{
    //
    public function adminCategory()
    {
        $categoriesProd = DB::table('categories')
        ->join('category_product', 'categories.id', '=', 'category_product.category_id')
        ->join('products', 'category_product.product_id', '=', 'products.id')
        ->select('categories.name', 'products.name')
        ->get();
        $categories = Category::all();
        
        $products = db::table('products')->paginate(8);
        // count of products in category
        $product_variants = DB::table('category_product')->select('category_id', DB::raw('count(*) as total'))->groupBy('category_id')->get();
        return view('admin.index', compact('categories', 'products', 'product_variants', 'categoriesProd'));
        session()->flash('success', 'Category added successfully');
        return redirect('/admin');
    }

    public function create()
    {
        //
        $categories = Category::all();
        return view('product-admin.create', compact('categories'));
    }

    

    public function store(Request $request)
    {
       
        // store the relationship in the database
        $PostCat = new categoryProduct;
        
        $PostCat->product_id = $request->product_id;
        $PostCat->category_id = $request->category_id;
        $PostCat->save() ;
        return redirect()->route('admin');
        //Store the Product in the database
        $product = new Product;
        $product->name = $request->name;
        $product->slug = Str::slug($request->name);
        
        
        $product->save();
        $product->categories()->attach($request->category_id);
        session()->flash('success', 'Product created successfully');
        return redirect('/admin');
    }

    

    public function show($id)
    {
        //
        $product = Product::find($id);
        return view('product-admin.show', compact('product'));
    }

    public function edit($id)
    {
        //edit the product based on the id and use the input to update the product
        $product = Product::find($id)->update();
        $categories = Category::all();
        


        $categories = Category::find($id)->update();

        session()->flash('success', 'Product updated successfully');
        return redirect('/admin');
    }

    public function destroy($id)
    {
        //Delete the product based on the id
        $product = Product::find($id);
        $product->delete($id);
        return redirect()->route('admin');
        //Delete the category based on the id
        $category = Category::find($id);
        $category -> Category::delete($id);
        

        
        session()->flash('success', 'Product deleted successfully');
        return redirect('/admin');
    }

    public function update(Request $request, $id)
    {
        //
        $request->validate([
            'name' => 'required',
            'description' => 'required',
            'price' => 'required',
            'image' => 'required',
            'category_id' => 'required',
        ]);

        $product = Product::find($id);
        $product->name = $request->name;
        $product->description = $request->description;
        $product->price = $request->price;
        $product->image = $request->image;
        $product->category_id = $request->category_id;
        $product->save();

        session()->flash('success', 'Product updated successfully');
        return redirect('/admin');
    }

    
}
