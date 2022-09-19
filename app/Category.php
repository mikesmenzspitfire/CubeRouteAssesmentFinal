<?php

namespace App;
use App\ProductVariant;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    // make fillable
    protected $fillable = ['name', 'meta_title', 'meta_description', 'meta_keywords'];
    public function products()
    {
        return $this->belongsToMany(Product::class);
        
    }
public function getProducts()
    {
        return $this->products()->get();
    }

    public function getProduct($id)
    {
        return $this->products()->where('id', $id)->first();
    }

    public function getVariants()
    {
        return $this->variants()->get();
    }

    public function getVariant($id)
    {
        return $this->variants()->where('id', $id)->first();
    }

    // Create Form for creating a new category
    public function createForm()
    {
        return view('categories.create');
    }

}
