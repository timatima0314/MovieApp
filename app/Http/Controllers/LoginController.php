<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;
use App\Models\User;
use \Symfony\Component\HttpFoundation\Response;

class LoginController extends Controller
{
    /**
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function login(Request $request)
    {
        // dd($request->email);
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);

        if (Auth::attempt($credentials)) {
            // $request->session()->regenerate();
            $user = User::whereEmail($request->email)->first();

            $user->tokens()->delete();
            $token = $user->createToken("login:user{$user->id}")->plainTextToken;


            // return response()->json(Auth::user());
            return response()->json(['token' => $token], Response::HTTP_OK);
        }

        return  response()->json([], 401);
    }
    /**
     * Log the user out of the application.
     *
     * @param  Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout(Request $request)
    {
        Auth::logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return response()->json(true);
    }
}
