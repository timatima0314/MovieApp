import React from "react";
import { getTmdbItem } from "../../../api/TmdbApi";
import { useQuery } from "react-query";
import TmdbItem from "./TmdbItem";

const TmdbList: React.VFC = () => {
    const { data, isLoading } = useQuery("item", getTmdbItem);
    console.log(data);
    if (isLoading) {
        return <span>Loading...</span>;
    }

    return (
        <ul className="flex flex-wrap ">
            {data.map((movie: any) => {
                // console.log(movie.id);
                return <TmdbItem key={movie.id} movie={movie} />;
            })}
        </ul>
    );
};

export default TmdbList