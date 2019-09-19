<?php

namespace App\Model;

use App\Model\Student;
use Illuminate\Database\Eloquent\Model;

class Grade extends Model
{
    public function student(){
        
        return $this->belongsTo(Student::class);

    }
}
