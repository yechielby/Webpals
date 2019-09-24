<?php

namespace App\Http\Resources\Student;

use Illuminate\Http\Resources\Json\JsonResource;

class StudentCollection extends JsonResource
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'fName'=> $this->first_name,
            'lName'=>  $this->last_name,
            'gpa'=> ($this->grades->count() > 0) ? round($this->grades->sum('grade')/$this->grades->count(), 2) : -1
        ];
    }
}
