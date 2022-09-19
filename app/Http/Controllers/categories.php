<?php

namespace App\Http\Controllers;
use App\Category;
use App\Product;
use Illuminate\Http\Request;

use function spec\Laracasts\Generators\Migrations\getStub;

class Categories extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function view(){
        
    }


    public function index()
    {
        //
        $categories = Category::all();
        $products = Product::all();
        // get related 
        Category::with('products')->get();
        
        
        return view('categories.index', compact('categories', 'products'));
        
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //get form input and save to database

        return view('categories.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
       //get form input and save to database
         $category = new Category();
            $category->name = $request->name;
            $category->meta_title = $request->meta_title;
            $category->meta_description = $request->meta_description;
            $category->meta_keywords = $request->meta_keywords;
            $category->save();
            return redirect()->route('categories.index');   
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //Show product in category
        $category = Category::find($id);
        $products = $category->products;
        return view('categories.show', compact('category', 'products'));
        // return view('categories.show', compact('category', 'products'));
        
       
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
        //
    }
}
