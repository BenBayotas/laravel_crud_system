<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\CampCatalouge;

class CampSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
     CampCatalouge::truncate();
     CampCatalouge::create([
        "name"=> "Secret Forest Campsite Resort",
        "location"=> "Kitaotao, Bukidnon",
        "ratings"=> "4.5",
     ]);
    }
}
