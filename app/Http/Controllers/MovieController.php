<?php

namespace App\Http\Controllers;

use App\Models\Movie;
use App\Http\Requests\MovieRequest;
use Illuminate\Http\Request;

class MovieController extends Controller
{
    public function index()
    {
        return Movie::orderByDesc('id')->get();
    }

    public function store(MovieRequest $request)
    {
        $movie = Movie::create($request->all());

        return $movie
            ? response()->json($movie, 201)
            : response()->json([], 500);
    }
    public function update(Request $request, Movie $movie)
    {
        $movie->title = $request->title;
        return $movie->update()
            ? response()->json($movie)
            : response()->json([], 500);
    }
    public function destroy(Movie $movie)
    {
        return $movie->delete()
            ? response()->json($movie)
            : response()->json([], 500);
    }
    //   @param Request $request

    // public function updateDone(Movie $movie, Requset $request)
    // {
    //     abort(500);
    //     return $movie->update()
    //         ? response()->json($movie)
    //         : response()->json([], 500);
    // }

    public function show(Movie $movie)
    {
    }
}
