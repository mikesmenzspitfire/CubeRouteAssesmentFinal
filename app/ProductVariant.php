<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ProductVariant extends Model
{
     //Make Product Variant model fillable
     protected $fillable = [
        'product_id', 'name', 'slug'
    ];
}
