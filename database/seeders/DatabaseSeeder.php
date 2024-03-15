<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use function Laravel\Prompts\password;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        $users = [
            [
                'name' => 'a',
                'email' => 'a@a.a',
                'password' => bcrypt('a')
                ],
                [
                'name' => 'b',
                'email' => 'b@b.b',
                'password' => bcrypt('b')
                ],
                [
                'name' => 'c',
                'email' => 'c@c.c',
                'password' => bcrypt('c')
                ],
                [
                'name' => 'd',
                'email' => 'd@d.d',
                'password' => bcrypt('d')
                ],
        ];
        
        foreach($users as $user){
            \App\Models\User::create(
                $user
            );
        }

        $this->call(WorkSeeder::class);
    }
}
