<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StudentRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        switch($this->method())
        {
            case 'GET':
            case 'DELETE':
            {
                return [];
            }
            case 'POST':
            {
                return [
                    'fName' => 'required|max:255',
                    'lName' => 'required|max:255',
                ];
            }
            case 'PUT':
            case 'PATCH':
            {
                return [
                    'fName' => 'max:255',
                    'lName' => 'max:255',
                ];
            }
            default:break;
        }
        
    }
}
