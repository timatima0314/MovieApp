import React from "react";
import { NavLink } from "react-router-dom";
const PopularTmdbItem: React.VFC<any> = ({ movie }) => {
    return (
        <li className="mr-4" key={movie.id} style={{ width: 185 }}>
            <NavLink
                className="truncate text-xs"
                to={`/detail-page/${movie.id}`}
            >
                <img
                    width={185}
                    height={278}
                    style={{ width: 185, height: 278 }}
                    src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`}
                />
                <div className="text-base whitespace-normal my-auto ">
                    {movie.title}
                </div>
            </NavLink>
        </li>
    );
};

export default PopularTmdbItem;
