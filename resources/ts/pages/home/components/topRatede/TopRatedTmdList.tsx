import React from "react";
import { getTopRatedTmdbItem } from "../../../../api/TmdbApi";
import { useQuery } from "react-query";
import TopRatedTmdbItem from "./TopRatedTmdItem";
const TopRatedTmdbList: React.VFC = () => {
    const { data, isLoading } = useQuery("topRatedItem", getTopRatedTmdbItem);
    if (isLoading) {
        return <span>Loading...</span>;
    }

    return (
        <>
            <h2 className="font-bold text-xl">評価の高い映画</h2>
            <ul className="flex flex-row w-full overflow-x-scroll mb-5 ">
                {data.map((movie: any) => {
                    return <TopRatedTmdbItem key={movie.id} movie={movie} />;
                })}
            </ul>
        </>
    );
};

export default TopRatedTmdbList;
