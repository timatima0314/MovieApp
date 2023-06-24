import React from "react";
import { getPopularTmdbItem } from "../../../../api/TmdbApi";
import { useQuery } from "react-query";
import PopularTmdbItem from "./PopularTmdbItem";
import { Thumbnail } from "../../../../types/Movie";

const PopularTmdbList: React.VFC = () => {
    const { data, isLoading } = useQuery("popularItem", getPopularTmdbItem);
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
            <h2 className="font-bold text-xl">人気の映画</h2>
            <ul className="flex flex-row w-full overflow-x-scroll mb-5 ">
                {data.map((movie: Thumbnail) => {
                    return <PopularTmdbItem key={movie.id} movie={movie} />;
                })}
            </ul>
        </>
    );
};

export default PopularTmdbList;
