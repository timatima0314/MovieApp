<?php

namespace App\Policies;

use App\Models\User;
use App\Models\Movie;
use Illuminate\Auth\Access\HandlesAuthorization;

class MoviePolicy
{
    use HandlesAuthorization;

    /**
     * Create a new policy instance.
     *
     * @return void
     */
    public function checkUser(User $user, Movie $movie)
    {
        if ($user->id === $movie->user_id) {
            return true;
        }
    }
}
