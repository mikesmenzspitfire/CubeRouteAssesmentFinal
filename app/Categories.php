<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Categories extends Model
{
 //Make Product Category model fillable
 protected $fillable = [
    'name', 'meta_title', 'meta_description', 'meta_keywords'
];
public function categories()
{
     return $this->belongsToMany(Product::class);
}
}


