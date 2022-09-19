<?php

use Illuminate\Database\Seeder;
use App\Category;


class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
  // get the json file
  $json = File::get("database/data/categories.json");
  $data = json_decode($json);
  // iterate through the data
  foreach ($data as $obj) {
      Category::create(array(
            
            'name' => $obj->name,
            'meta_title' => $obj->meta_title,
            'meta_description' => $obj->meta_description,
            'meta_keywords' => $obj->meta_keywords,
      ));

      

    }
}
}
