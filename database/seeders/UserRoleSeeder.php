<?php

namespace Database\Seeders;

use App;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Str;

class UserRoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {   
        User::truncate();
        User::create([
            'username' => 'admin',
            'email'=> 'admin@gmail.com',
            'password'=> bcrypt('123admin'),
            'firstname'=> 'Andy',
            'middlename'=> 'Ann',
            'lastname'=> 'Admin',
            'suffix'=> 'Sr.',
            'gender'=> 'Male',
            'status'=> 'Alive',
            'remember_token'=> Str::random(10),
        ]);
    }
}
