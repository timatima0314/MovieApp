import React from "react";
import { NavLink } from "react-router-dom";
const TmdbItem: React.VFC <any>= ({ movie }) => {
    return (
        <li className="w-50 mr-2" key={movie.id}>
            <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} />
            <NavLink className="truncate text-xs" to={`/singl-page/${movie.id}`}>{movie.title}</NavLink>
        </li>
    );
};

export default TmdbItem;
