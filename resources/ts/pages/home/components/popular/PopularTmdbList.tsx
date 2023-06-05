import React from "react";
import { getPopularTmdbItem } from "../../../../api/TmdbApi";
import { useQuery } from "react-query";
import PopularTmdbItem from "./PopularTmdbItem";

const PopularTmdbList: React.VFC = () => {
    const { data, isLoading } = useQuery("popularItem", getPopularTmdbItem);
    if (isLoading) {
        return <span>Loading...</span>;
    }

    return (
        <ul className="flex flex-row w-full overflow-x-scroll mb-5 ">
            {data.map((movie: any) => {
                // console.log(movie.id);
                return <PopularTmdbItem key={movie.id} movie={movie} />;
            })}
        </ul>
    );
};

export default PopularTmdbList