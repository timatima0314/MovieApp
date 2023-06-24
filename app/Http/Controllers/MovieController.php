<?php

namespace App\Http\Controllers;

use App\Models\Movie;
use App\Http\Requests\MovieRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class MovieController extends Controller
{
    public function __construct()
    {
        $this->middleware('can:checkUser,movie')->only([
            'update', 'destroy'
        ]);
    }

    // ログインユーザーのデータを所得
    public function index()
    {
        return Movie::where('user_id', Auth::id())->orderByDesc('id')->get();
    }

    // データ作成
    public function store(MovieRequest $request)
    {
        $request->merge([
            'user_id' => Auth::id()
        ]);
        $movie = Movie::create($request->all());
        return $movie
            ? response()->json($movie, 201)
            : response()->json([], 500);
    }

    // データ更新
    public function update(Request $request, Movie $movie)
    {
        $movie->title = $request->title;
        return $movie->update()
            ? response()->json($movie)
            : response()->json([], 500);
    }

    // データ削除
    public function delete($id, Movie $movie)
    {
        $logInUserId = Auth::id();
        return $movie->where('title_id', $id)->where('user_id', $logInUserId)->delete()
            ? response()->json($movie)
            : response()->json([], 500);
    }
}
