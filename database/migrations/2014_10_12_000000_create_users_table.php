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
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->integer('role_id')->default(1);
            $table->boolean('is_active')->default(true);
            $table->boolean('verified')->default(false);
            $table->integer('agency_id')->nullable();
            $table->integer('subscription_id')->default(1);
            $table->string('name');
            $table->string('email')->unique();
            $table->string('phone');
            $table->string('whatsapp');
            $table->text('about')->nullable();
            $table->string('category');
            $table->string('facebook')->nullable();
            $table->string('twitter')->nullable();
            $table->string('youtube')->nullable();
            $table->integer('image_id')->nullable();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->rememberToken();
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
        Schema::dropIfExists('users');
    }
};
