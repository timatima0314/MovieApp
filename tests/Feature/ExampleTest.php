<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use App\Models\Movie;
use App\Models\User;

class ExampleTest extends TestCase
{
    use RefreshDatabase;

    public function setUp(): void
    {
        parent::setUp();
        $user = User::factory()->create();
        // $this->actingAs($user);
    }
    /**
     * @test
     */
    public function 一覧を取得()
    {
        $movies = Movie::factory(3)->create();
        $response = $this->getJson('api/movies');
        $response
            ->assertOk()
            ->assertJsonCount($movies->count());
    }
    /**
     * @test
     */
    public function 登録することができる()
    {
        $data = [
            'title' => 'テスト投稿'
        ];
        $response = $this->postJson('api/movies', $data);
        $response
            ->assertStatus(201)
            ->assertJsonFragment($data);
    }
    public function 削除することができる()
    {
        $movie = Movie::factory()->create();

        $response = $this->deleteJson('api/movies/5');
        $response->assertOk();
    }
    /**
     * @test
     */
    public function タイトルが空の場合は登録できない()
    {
        $data = [
            'title' => ''
        ];
        $response = $this->postJson('api/movies', $data);
        // dd($response->json());
        $response
            ->assertStatus(422)
            ->assertJsonValidationErrors([
                'title' => 'タイトルは必須です。'
            ]);
    }
    /**
     * @test
     */
    public function タイトルが255文字の場合は登録できない()
    {
        $data = [
            'title' => str_repeat('あ', 256)
        ];
        $response = $this->postJson('api/movies', $data);
        $response
            ->assertStatus(422)
            ->assertJsonValidationErrors([
                'title' => 'タイトルは255文字以下で入力してください。'
            ]);
    }
}
