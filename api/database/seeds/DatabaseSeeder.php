<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UsersTableSeeder::class);
        /*
            $ php artisan migrate:refresh
            $ php artisan db:seed 
            $ php artisan passport:install 
        */
        // factory(App\User::class, 5)->create();
        factory(App\Model\Student::class, 20)->create();
        factory(App\Model\Grade::class, 200)->create();
    }
}
