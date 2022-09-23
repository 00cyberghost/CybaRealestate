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
        Schema::create('features', function (Blueprint $table) {
            $table->id();
            $table->integer('property_id');
            $table->string('AC')->nullable();
            $table->string('SW')->nullable();
            $table->string('WH')->nullable();
            $table->string('security')->nullable();
            $table->string('gym')->nullable();
            $table->string('serviced')->nullable();
            $table->string('furnished')->nullable();
            $table->string('MQ')->nullable();
            $table->string('TC')->nullable();
            $table->string('wifi')->nullable();
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
        Schema::dropIfExists('features');
    }
};
