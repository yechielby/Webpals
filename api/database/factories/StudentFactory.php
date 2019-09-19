<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Model\Student;
use Faker\Generator as Faker;

$factory->define(Student::class, function (Faker $faker) {
    return [
        'first_name'=> $faker->firstName,
        'last_name'=> $faker->lastName
    ];
});
