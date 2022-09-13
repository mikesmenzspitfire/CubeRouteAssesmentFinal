<?php

use Illuminate\Database\Seeder;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //seed users table
        UserTableSeeder::table('users')->insert([
            'name' => 'Admin',
            'email' => 'admin@cuberoute.co.za',
            'password' => bcrypt('password')
        ]);
    };
}
