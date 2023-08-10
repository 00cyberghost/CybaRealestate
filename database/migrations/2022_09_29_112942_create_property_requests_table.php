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
        Schema::create('property_requests', function (Blueprint $table) {
            $table->id();
            $table->integer('user_id');
            $table->boolean('approved')->default(false);
            $table->string('status');
            $table->string('type');
            $table->integer('bedroom')->nullable();
            $table->integer('bathroom')->nullable();
            $table->integer('parking')->nullable();
            $table->integer('area')->nullable();
            $table->string('unit')->nullable();
            $table->string('currency')->default('NGN');
            $table->bigInteger('price');
            $table->text('description')->nullable();
            $table->string('state');
            $table->string('local_government');
            $table->string('locality');
            $table->string('longitude')->nullable();
            $table->string('latitude')->nullable();
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
        Schema::dropIfExists('property_requests');
    }
};
