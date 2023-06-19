import axios from "axios";
import { Movie } from "../types/Movie";

// DB:moviesTablesのデータ取得
const getMovies = async () => {
    const { data } = await axios.get<Movie[]>("/api/movies");
    return data;
}

/**
 *映画情報を登録
 *@param {string} title 映画タイトル
 *@param {string} poster_path ポスターの画像path
 *@param {number} title_id TmdbAPIの個々の映画のid
 */
const createMovie = async ({ title, poster_path, title_id }: { title: string, poster_path: string, title_id: number }) => {
    const { data } = await axios.post<any>(`/api/movies`, { title: title, poster_path: poster_path, title_id: title_id });
    return data;
}

/**
 *登録した映画情報の更新
 *@param {number} id DB:moviesTablesのid
 */
const updateMovie = async ({ id, movie }: { id: number, movie: Movie }) => {
    const { data } = await axios.patch<Movie>(`/api/movies/${id}`, movie);
    return data;
}

/**
 *DB:moviesTablesのtitle_idを検索し削除
 *@param {number} title_id TmdbAPIの個々の映画のid
 */
const deleteMovie = async (title_id: number) => {
    const { data } = await axios.delete<Movie>(`/api/movies/delete/${title_id}`);
    return data;
}

export { getMovies, createMovie, updateMovie, deleteMovie }