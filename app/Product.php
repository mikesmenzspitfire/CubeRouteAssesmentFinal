<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use app\Categories;




class Product extends Model
{
    
    
    //Make Product model fillable
    protected $fillable = [
        'name', 'slug'
    ];

    public function product()
    {
         return $this->belongsToMany(Categories::class);
    }
}

