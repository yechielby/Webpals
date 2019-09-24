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
            'fullName'=> $this->first_name .' '. $this->last_name,
            'GPA'=> ($this->grades->count() > 0) ? round($this->grades->sum('grade')/$this->grades->count(), 2) : -1,
            'grades' => route('students.show', $this->id)
        ];
    }
}
