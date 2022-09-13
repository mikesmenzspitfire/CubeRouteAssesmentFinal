<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class category_product extends Model
{
    
    protected $fillable = [
        'product_id', 'category_id', 'product_name'
    ];

    // Define has one to many relationship with product model
    public function product()
    {
        return $this->belongsTo(Product::class);
    }
}
