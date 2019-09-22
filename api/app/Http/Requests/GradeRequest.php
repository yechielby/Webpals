<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class GradeRequest extends FormRequest
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
                    'examName' => 'required|max:255',
                    'grade' => 'required|integer|between:0,100',
                ];
            }
            case 'PUT':
            case 'PATCH':
            {
                return [
                    'examName' => 'max:255',
                    'grade' => 'integer|between:0,100',
                ];
            }
            default:break;
        }
    }
}
