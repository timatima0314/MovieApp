import axios from "axios";
import { Movie } from "../types/Movie";

const getMovies = async () => {
    const { data } = await axios.get<Movie[]>("api/movies");
    console.log(data)
    return data;
}

const createMovie = async ({title, poster_path}:{title:any,poster_path:any}) => {
    const { data } = await axios.post<any>(`/api/movies`, { title: title, poster_path: poster_path });
    return data;
}

const updateMovie = async ({ id, movie }: { id: number, movie: Movie }) => {
    const { data } = await axios.patch<Movie>(`api/movies/${id}`, movie);
    return data;
}
const deleteMovie = async (id: number) => {
    const { data } = await axios.delete<Movie>(`api/movies/${id}`);
    return data;
}

export { getMovies, createMovie, updateMovie, deleteMovie }