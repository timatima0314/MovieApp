import axios from "axios";
import { Movie } from "../types/Movie";

const getMovies = async () => {
    const { data } = await axios.get<Movie[]>("api/movies");
    return data;
}

// const updateDoneMovie = async ({id}:Movie) => {
//     const { data } = await axios.patch<Movie[]>(`api/movies/update-done/${id}`);
//     return data;
// }

const createMovie = async (title: string) => {
    const { data } = await axios.post<Movie>(`api/movies`, { title: title });
    return data;
}

const updateMovie = async ({ id, movie }: { id: number, movie: Movie }) => {
    const { data } = await axios.patch<Movie>(`api/movies/${id}`, movie);
    return data;
}
// const deleteMovie = async (id: number) => {
//     const { data } = await axios.delete<Movie>(`api/movies/${id}`, movie);
//     return data;
// }

export { getMovies, createMovie, updateMovie }