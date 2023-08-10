<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('properties', function (Blueprint $table) {
            $table->id();
            $table->integer('user_id');
            $table->integer('agency_id')->nullable();
            $table->boolean('approved')->default(false);
            $table->string('status')->default('available');
            $table->string('category');
            $table->string('title');
            $table->string('type');
            $table->string('subtype')->nullable();
            $table->integer('bedroom')->nullable();
            $table->integer('bathroom')->nullable();
            $table->integer('parking')->nullable();
            $table->integer('area')->nullable();
            $table->string('unit')->nullable();
            $table->string('currency')->default('NGN');
            $table->bigInteger('price');
            $table->string('duration')->nullable();
            $table->text('description')->nullable();
            $table->text('video')->nullable();
            $table->string('state');
            $table->string('local_government');
            $table->string('locality');
            $table->string('address');
            $table->string('longitude')->nullable();
            $table->string('latitude')->nullable();
            $table->bigInteger('ref');
            $table->integer('views')->default(0);
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('properties');
    }
};
