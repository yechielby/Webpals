<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Model\Grade;
use App\Model\Student;
use Faker\Generator as Faker;

$factory->define(Grade::class, function (Faker $faker) {
    return [
        'student_id' => function(){
            return Student::all()->random();
        },
        'exam'=> $faker->word,
        'grade'=> $faker->numberBetween(70,100)
    ];
});
