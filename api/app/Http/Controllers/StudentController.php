<?php

namespace App\Http\Controllers;

use App\Http\Requests\StudentRequest;
use App\Http\Resources\Student\StudentCollection;
use App\Http\Resources\Student\StudentResource;
use App\Model\Student;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class StudentController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api')->except('index','show');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request, Student $student)
    {
        //return Student::all();
        // return StudentResource::collection(Student::all());
        // return StudentCollection::collection(Student::all());
        if ($request->has('fName') & $request->has('lName')) {
            return StudentCollection::collection(Student::where('first_name','like', '%'.$request->fName.'%')->where('last_name','like', '%'.$request->lName.'%')->get());
            // return $request->fName;
        }
        else if ($request->has('fName')) {
            return StudentCollection::collection(Student::where('first_name','like', '%'.$request->fName.'%')->get());
        }
        else if ($request->has('lName')) {
            return StudentCollection::collection(Student::where('last_name','like', '%'.$request->lName.'%')->get());
        }
        return StudentCollection::collection(Student::paginate(5));
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
    public function store(StudentRequest $request)
    {
        // return $request->all();
        $student = new Student;
        $student->first_name = $request->fName;
        $student->last_name = $request->lName;
        $student->save();
        return Response([
            'data' => new StudentResource($student)
        ], Response::HTTP_CREATED);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Model\Student  $student
     * @return \Illuminate\Http\Response
     */
    public function show(Student $student)
    {
        //return $student;
        return new StudentResource($student);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Model\Student  $student
     * @return \Illuminate\Http\Response
     */
    public function edit(Student $student)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Model\Student  $student
     * @return \Illuminate\Http\Response
     */
    public function update(StudentRequest $request, Student $student)
    {
        // return $request->all();
        // return $student;

        if(isset($request['fName'])){
            $request['first_name'] = $request->fName;
            unset($request['fName']);
        }

        if(isset($request['lName'])){
            $request['last_name'] = $request->lName;
            unset($request['lName']);
        }
        
        $student->update($request->all());

        return Response([
            'data' => new StudentResource($student)
        ], Response::HTTP_OK);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Model\Student  $student
     * @return \Illuminate\Http\Response
     */
    public function destroy(Student $student)
    {
        // return $student;
        $student->delete();

        return Response(null, Response::HTTP_NO_CONTENT);
    }
}
