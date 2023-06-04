import React from "react";
import { getTopRatedTmdbItem } from "../../../../api/TmdbApi";
import { useQuery } from "react-query";
import TopRatedTmdbItem from "./TopRatedTmdItem";
const TopRatedTmdbList: React.VFC = () => {
    const { data, isLoading } = useQuery("topRatedItem", getTopRatedTmdbItem);
    console.log(data);
    if (isLoading) {
        return <span>Loading...</span>;
    }

    return (
        <ul className="flex flex-row w-full overflow-x-scroll mb-5 ">
            {data.map((movie: any) => {
                // console.log(movie.id);
                return <TopRatedTmdbItem key={movie.id} movie={movie} />;
            })}
        </ul>
    );
};

export default TopRatedTmdbList;
