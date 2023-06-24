import React from "react";
import { getTopRatedTmdbItem } from "../../../../api/TmdbApi";
import { useQuery } from "react-query";
import TopRatedTmdbItem from "./TopRatedTmdItem";
import { Thumbnail } from "../../../../types/Movie";
const TopRatedTmdbList: React.VFC = () => {
    const { data, isLoading } = useQuery("topRatedItem", getTopRatedTmdbItem);
    if (isLoading) {
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
            <h2 className="font-bold text-xl">評価の高い映画</h2>
            <ul className="flex flex-row w-full overflow-x-scroll mb-5 ">
                {data.map((movie: Thumbnail) => {
                    return <TopRatedTmdbItem key={movie.id} movie={movie} />;
                })}
            </ul>
        </>
    );
};

export default TopRatedTmdbList;
