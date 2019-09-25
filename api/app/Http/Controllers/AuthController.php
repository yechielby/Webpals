<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Support\Facades\Auth;
use Validator;

class AuthController extends Controller
{
    /**
     * login api
     *
     * @return \Illuminate\Http\Response
     */
    public function login(Request $request)
    {
        $input = $request->all();
        if(Auth::attempt(['email' => $input['email'], 'password' => $input['password']]))
        {
            $user = Auth::user();
            $success['name'] = $user->name;
            $success['token'] = $user->createToken('myApp')->accessToken;
            return response()->json(['success' => $success], 200); 
        } 
        else
        {
            return response()->json(['error'=>['massage'=>'The email address and password don’t match any account.']], 401);
        }
    }

    /**
     * Register api
     *
     * @return \Illuminate\Http\Response
     */
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:8'],
            'confirm_password' => ['required', 'string', 'same:password'],
        ]);

        if ($validator->fails())
        {
            return response()->json(['error'=>$validator->errors()], 401);
        }
        $input = $request->all();
        $input['password'] = bcrypt($input['password']);
        unset($input['confirm_password']);
        $user = User::create($input);
        $success['name'] = $user->name;
        $success['token'] = $user->createToken('myApp')->accessToken;
        return response()->json(['success'=>$success], 200);
    }
}
