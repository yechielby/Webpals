<?php

use Illuminate\Http\Request;
/*
    Show all exsist route
    code:
    $ php artisan route:list 
*/ 
Route::post('/login', 'AuthController@login');
Route::post('/register', 'AuthController@register');
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::apiResource('/students','StudentController');

Route::group(['prefix'=>'students'],function(){

    Route::apiResource('/{student}/grades','GradeController');

});
