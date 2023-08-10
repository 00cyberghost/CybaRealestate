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
        Schema::create('agencies', function (Blueprint $table) {
            $table->id();
            $table->integer('role_id')->default(1);
            $table->boolean('is_active')->default(true);
            $table->boolean('verified')->default(false);
            $table->integer('subscription_id')->default(1);
            $table->string('name');
            $table->string('email')->unique();
            $table->string('phone');
            $table->string('whatsapp');
            $table->text('about')->nullable();
            $table->string('facebook')->nullable();
            $table->string('twitter')->nullable();
            $table->string('youtube')->nullable();
            $table->string('state')->nullable();
            $table->string('local_government')->nullable();
            $table->string('locality')->nullable();
            $table->string('address')->nullable();
            $table->string('longitude')->nullable();
            $table->string('latitude')->nullable();
            $table->string('image')->nullable();
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
        Schema::dropIfExists('agencies');
    }
};
