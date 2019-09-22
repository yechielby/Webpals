<?php

namespace App\Model;

use App\Model\Student;
use Illuminate\Database\Eloquent\Model;

class Grade extends Model
{
    protected $fillable = [

        'exam','grade'

    ];
    public function student(){
        
        return $this->belongsTo(Student::class);

    }
}
