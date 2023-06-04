import React from "react";
import { getNowPlayingTmdbItem } from "../../../../api/TmdbApi";
import { useQuery } from "react-query";
import NowPlayingTmdbItem from "./NowPlayingTmdbItem";

const NowPlayingTmdbList: React.VFC = () => {
    const { data, isLoading } = useQuery(
        "nowPlayingItem",
        getNowPlayingTmdbItem
    );
    console.log(data);
    if (isLoading) {
        return <span>Loading...</span>;
    }

    return (
        <ul className="flex flex-row w-full overflow-x-scroll mb-5 ">
            {data.map((movie: any) => {
                // console.log(movie.id);
                return <NowPlayingTmdbItem key={movie.id} movie={movie} />;
            })}
        </ul>
    );
};

export default NowPlayingTmdbList;
