<?php

use App\category_product;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(ProductsSeeder::class);
        $this->call(CategorySeeder::class);
        $this->call(ProductVariantSeeder::class);
        // $this->call(category_products::class);
        // $this->call(UsersTableSeeder::class);
        // $this->call(UserTableSeeder::class);
       
        // $this->call(ProductVariantSeeder::class);
        // $this->call(CategorySeeder::class);
        // $this->call(category_products::class);
    }
}
