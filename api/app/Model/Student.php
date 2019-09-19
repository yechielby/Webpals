<?php

namespace App\Model;

use App\Model\Grade;
use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    public function grades(){
        
        return $this->hasMany(Grade::class);

    }
}
