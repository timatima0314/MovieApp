<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
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
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);
        if (Auth::attempt($credentials)) {
            $user = User::whereEmail($request->email)->first();
            $user->tokens()->delete();
            $token = $user->createToken("login:user{$user->id}")->plainTextToken;
            return response()->json(['token' => $token], Response::HTTP_OK);
        }
        return  response()->json([], 401);
    }
    /**
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
