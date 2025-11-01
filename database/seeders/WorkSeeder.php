<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Work;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class WorkSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $works = [];
        foreach( User::pluck('id')->toArray() as $user_id){
            foreach( [1,2] as $iteration){
                $works[] = [
                    'user_id' => $user_id,
                    'category' => 'test',
                    'title' => 'test',
                    'description' => 'test',
                    'url' => 'https://alyhsn.com',
                ];
            }
        }
        Work::insert($works);
    }
}
