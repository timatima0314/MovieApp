import React from "react";
import {
    useMovies,
    useCreateMovie,
    useUpdateMovie,
    // useDeleteMovie,
} from "../../queries/MovieQuery";
import MovieItem from "./MovieItem";

const MovieList: React.VFC = () => {
    const { data: movies, status } = useMovies();
    if (status === "loading") {
        return <div className="text-center">読み込み中</div>;
    } else if (status === "error") {
        return (
            <div className="text-center">データの読み込みに失敗しました。</div>
        );
    } else if (!movies || movies.length <= 0) {
        return (
            <div className="text-center">登録されたデータはありません。</div>
        );
    }

    return (
        <ul className="movie-list">
            {movies.map((movie) => {
                return (
                    <MovieItem key={movie.id} movie={movie}/>
                    //  <li key={movie.id}>{movie.title}</li>;
                );
            })}
        </ul>
    );
};

export default MovieList;
