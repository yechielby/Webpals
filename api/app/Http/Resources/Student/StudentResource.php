<?php

namespace App\Http\Resources\Student;

use Illuminate\Http\Resources\Json\JsonResource;

class StudentResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'fName'=> $this->first_name,
            'lName'=> $this->last_name,
            'GPA'=> ($this->grades->count() > 0) ? round($this->grades->sum('grade')/$this->grades->count(), 2) : -1,
            'grades' => route('grades.index', $this->id)
        ];
    }
}
