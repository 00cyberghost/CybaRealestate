<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use App\Models\Role;

class RolesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('roles')->insert([
            'name' => 'user'
        ]);

        DB::table('roles')->insert([
            'name' => 'agency admin'
        ]);

        DB::table('roles')->insert([
            'name' => 'admin'
        ]);

        DB::table('roles')->insert([
            'name' => 'super admin'
        ]);
    }
}
