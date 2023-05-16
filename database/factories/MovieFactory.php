<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

use App\Models\Movie;

class MovieFactory extends Factory
{
    protected $model = Movie::class;
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $user_id = $this->faker->numberBetween(1, 3);

        return [
            'title' => $user_id . ':' . $this->faker->realText(rand(15, 40)),
            'user_id' => $user_id,
            'created_at' => now(),
            'updated_at' => now()
        ];
    }
}
