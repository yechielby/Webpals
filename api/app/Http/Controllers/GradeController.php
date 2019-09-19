<?php

namespace App\Http\Controllers;

use App\Http\Resources\Grade\GradeResource;
use App\Model\Grade;
use App\Model\Student;
use Illuminate\Http\Request;

class GradeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Student $student)
    {
        // return Grade::all();
        // return GradeResource::collection(Grade::all());
        return GradeResource::collection($student->grades);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Model\Grade  $grade
     * @return \Illuminate\Http\Response
     */
    public function show(Student $student, Grade $grade)
    {
        $_grade = $student->grades->firstWhere('id', $grade->id);
        return $_grade ?  new GradeResource($_grade): '{}';
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Model\Grade  $grade
     * @return \Illuminate\Http\Response
     */
    public function edit(Grade $grade)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Model\Grade  $grade
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Grade $grade)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Model\Grade  $grade
     * @return \Illuminate\Http\Response
     */
    public function destroy(Grade $grade)
    {
        //
    }
}
