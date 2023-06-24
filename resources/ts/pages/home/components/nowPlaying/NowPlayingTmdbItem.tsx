import React from "react";
import { NavLink } from "react-router-dom";
import { Thumbnail } from "../../../../types/Movie";
interface Props {
    movies: Thumbnail;
}
const NowPlayingTmdbItem: React.VFC<Props> = ({ movies }) => {
    return (
        <li className="mr-4" key={movies.id} style={{ width: 185 }}>
            <NavLink
                className="truncate text-xs"
                to={`/detail-page/${movies.id}`}
            >
                <img
                    width={185}
                    height={278}
                    style={{ width: 185, height: 278 }}
                    src={`https://image.tmdb.org/t/p/w185/${movies.poster_path}`}
                />
                <div className="text-base whitespace-normal my-auto">
                    {movies.title}
                </div>
            </NavLink>
        </li>
    );
};

export default NowPlayingTmdbItem;
