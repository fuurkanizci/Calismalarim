<?php

namespace App\Http\Controllers;

use App\Contact;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Mail;
use App\Mail\Mailling;
use App\Mail\SendContactMail;

class ContactController extends Controller
{
    public function submit(Request $request)
    {
        $data = $request->all();
        $validation = Validator::make($data, [
            'fullname' => ['required', 'string'],
            'phone' => ['required', 'string'],
            'mail' => ['required', 'string'],
            'message' => ['required', 'string'],

        ]);

        if ($validation->fails()) {
            return response()->json([
                'message' => $validation->errors(),
                'statusCode' => http_response_code(),
            ]);
        } else {
            $added = Contact::Create([
                'fullname' => $data['fullname'],
                'phone' => $data['phone'],
                'mail' => $data['mail'],
                'message' => $data['message'],

            ]);
            if ($added) {
                $details = [
                    'fullname' => $data['fullname'],
                    'phone' => $data['phone'],
                    'mail' => $data['mail'],
                    'message' => $data['message'],

                ];
                Mail::to('ocopoglu@socialthinks.com')->send(new SendContactMail($details));
                return response()->json([
                    'message' => 'Success',
                    'statusCode' => http_response_code(),
                ]);
            } else {
                return response()->json([
                    'message' => 'Unsuccess',
                    'statusCode' => http_response_code(),
                ]);
            }
        }
    }
}