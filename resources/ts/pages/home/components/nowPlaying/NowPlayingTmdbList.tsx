import React from "react";
import { getNowPlayingTmdbItem } from "../../../../api/TmdbApi";
import { useQuery } from "react-query";
import NowPlayingTmdbItem from "./NowPlayingTmdbItem";
import { Thumbnail } from "../../../../types/Movie";

const NowPlayingTmdbList: React.VFC = () => {
    const { data, status } = useQuery("nowPlayingItem", getNowPlayingTmdbItem);
    if (status === "loading") {
        return <span>Loading...</span>;
    } else if (!data || data.length <= 0) {
        return (
            <span>
                データを所得できませんでした。ネット環境を確認の上、もう一度お試しください。
            </span>
        );
    }
    return (
        <>
            <h2 className="font-bold text-xl">上映中の映画</h2>
            <ul className="flex flex-row w-full overflow-x-scroll mb-5 ">
                {data.map((movie: Thumbnail) => {
                    return <NowPlayingTmdbItem movies={movie} key={movie.id}  />;
                })}
            </ul>
        </>
    );
};

export default NowPlayingTmdbList;
