import React from "react";
import { getTmdbItem } from "../../api/TmdbApi";
import { useQuery } from "react-query";

const DevHomePage: React.VFC = () => {
    const { data, isLoading } = useQuery("item", getTmdbItem);
    if (isLoading) {
        return <span>Loading...</span>;
    }

    return (
        <>
            <h1 className="text-red-400 text-4xl">dev-Home Page</h1>
            <ul className="flex flex-wrap ">
                {data.map((e: any) => {
                    console.log(e);
                    return (
                        <li className="w-50 mr-2" key={e.id}>
                            <img
                                src={`https://image.tmdb.org/t/p/w300/${e.poster_path}`}
                            />
                            <div className="truncate text-xs">{e.title}</div>
                        </li>
                    );
                })}
            </ul>
        </>
    );
};

export default DevHomePage;
