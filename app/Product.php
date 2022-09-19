<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
use App\Category;

use App\ProductVariant;
use illuminate\Http\Client\Request;



class Product extends Model
{
    // make fillable
    protected $fillable = ['name', 'slug'];
    public function categories()
    {
        return $this->belongsToMany(Category::class);
    }

    public function variants()
    {
        return $this->hasMany(ProductVariant::class, 'product_id');
    }
public function getVariants()
    {
        return $this->variants()->get();
    }

    public function getVariant($id)
    {
        return $this->variants()->where('id', $id)->first();
    }
    
}
