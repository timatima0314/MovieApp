import React from "react";
import { Movie } from "../../types/Movie";

type Props = {
    movie: Movie;
};
const MovieItem :React.VFC<Props>= ({movie}) => {
    return <li key={movie.id}>{movie.title}</li>;
};
export default MovieItem;
