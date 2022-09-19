<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ProductVariants extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::create('product_variants', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('product_id')->nullable()->unsigned();
            // $table->foreignId('product_id')->references('id')->on('products')->onDelete('cascade');
            $table->string('name')->nullable();
            $table->string('sap_product_code')->nullable();
            $table->string('web_product_code')->nullable();
        //    timestamps
            $table->timestamps();
            
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
