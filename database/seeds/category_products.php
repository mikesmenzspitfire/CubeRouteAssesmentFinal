<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;


class category_products extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Seed table using the Faker library
        $faker = Faker\Factory::create();
        // Create 1000 category_product records
        for ($i = 0; $i < 200; $i++) {
            DB::table('category_products')->insert([
                'category_id' => $faker->numberBetween(1, 3),
                'product_id' => $faker->numberBetween(27, 400),
            ]);
        }

      

        

    }
}
