<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Relations\Pivot;
use App\Product;
use App\Category;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class categoryProduct extends Pivot
{
    protected $table = 'category_product';
    protected $fillable = ['category_id', 'product_id'];

    public function categories()
    {
        return $this->belongsToMany(Category::class, 'category_product', 'category_id', 'product_id');
    }

    public function products()
    {
        return $this->belongsToMany(Product::class, 'category_product', 'product_id', 'category_id');
    }

    public function adminCategory()
    {
        $categoriesProd = DB::table('categories')
        ->join('category_product', 'categories.id', '=', 'category_product.category_id')
        ->join('products', 'category_product.product_id', '=', 'products.id')
        ->select('categories.name', 'products.name')
        ->get();
        $categories = Category::all();
        // Pagination Causing Problems with Select inputs <select>! FUCK!
        $products = db::table('products')->paginate(8);
        // count of products in category
        $product_variants = DB::table('category_product')->select('category_id', DB::raw('count(*) as total'))->groupBy('category_id')->get();
        return view('admin.index', compact('categories', 'products', 'product_variants', 'categoriesProd'));
        session()->flash('success', 'Category added successfully');
        return redirect('/admin');
    }
}
