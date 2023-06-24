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
        <>
            <h2 className="font-bold text-xl">人気の映画</h2>
            <ul className="flex flex-row w-full overflow-x-scroll mb-5 ">
                {data.map((movie: any) => {
                    return <PopularTmdbItem key={movie.id} movie={movie} />;
                })}
            </ul>
        </>
    );
};

export default PopularTmdbList;
