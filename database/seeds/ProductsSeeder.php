<?php

use Illuminate\Database\Seeder;
use App\Product;
class ProductsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      
         // get the json file
         $json = File::get("database/data/products.json");
         $data = json_decode($json);
         // iterate through the data
         foreach ($data as $obj) {
             Product::create(array(
                 
                 'name' => $obj->name,
                 'slug' => $obj->slug
             ));
            }
    }
}