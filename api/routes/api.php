<?php

use Illuminate\Http\Request;

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::apiResource('/students','StudentController');

Route::group(['prefix'=>'students'],function(){

    Route::apiResource('/{student}/grades','GradeController');

});
