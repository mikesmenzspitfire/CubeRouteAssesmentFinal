<?php

use Illuminate\Database\Seeder;
use App\ProductVariant;
class ProductVariantSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
    //     "product_id": 125,
    //   "sap_product_code": "NULL",
    //   "web_product_code": 145479,
    //   "name": "Eukanuba Adult Medium Breed Dog Food 3 KG"
         // get the json file
         $json = File::get("database/data/product_variants.json");
         $data = json_decode($json);
         // iterate through the data
         foreach ($data as $obj) {
             ProductVariant::create(array(
                    'product_id' => $obj->product_id,
                    'sap_product_code' => $obj->sap_product_code,
                    'web_product_code' => $obj->web_product_code,
                    'name' => $obj->name,
                ));
            }
    }
}
