import axios from "axios";
import { Movie } from "../types/Movie";

const getMovies = async () => {
    const { data } = await axios.get<Movie[]>("/api/movies");
    return data;
}

const createMovie = async ({ title, poster_path, title_id }: { title: string, poster_path: string, title_id: number }) => {
    const { data } = await axios.post<any>(`/api/movies`, { title: title, poster_path: poster_path, title_id: title_id });
    return data;
}

const updateMovie = async ({ id, movie }: { id: number, movie: Movie }) => {
    const { data } = await axios.patch<Movie>(`/api/movies/${id}`, movie);
    return data;
}
const deleteMovie = async (id: number) => {
    const { data } = await axios.delete<Movie>(`/api/movies/${id}`);
    return data;
}

export { getMovies, createMovie, updateMovie, deleteMovie }