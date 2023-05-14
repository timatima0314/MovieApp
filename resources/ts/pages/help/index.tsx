import React, { useState } from "react";
import {
    useMovies,
    useCreateMovie,
    useUpdateMovie,
    // useDeleteMovie,
} from "../../queries/MovieQuery";
import { Movie } from "../../types/Movie";
import MovieList from "./MovieList";
import MoiveInput from "./MovieInput";

const HelpPage: React.VFC = () => {
    // const creatMovie = useCreateMovie();
    // const [title, setTitle] = useState("");
    // const [editTitle, setEditTitle] = useState<string | undefined>(undefined);
    // const itemInput = () => {
    //     return (
    //         <>
    //             <form>
    //                 <input type="text" />
    //             </form>
    //             <button>更新</button>
    //         </>
    //     );
    // };
    // const itemText = () => {
    //     return (
    //         <>
    //             <div onClick={handleToggleEdit}>
    //                 <span>{movie.title}</span>
    //             </div>
    //             <button>削除</button>
    //         </>
    //     );
    // };
    // const handleToggleEdit = (movie: Movie) => {
    //     setEditTitle(movie.title);
    // };

    // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();
    //     creatMovie.mutate(title);
    //     setTitle("");
    // };
    return (
        <>
            <h1 className="text-red-400 text-4xl">Help Page</h1>
            <MoiveInput/>
            <MovieList />
        </>
    );
};

export default HelpPage;
