import React from "react";
import { NavLink } from "react-router-dom";

interface Props {
    movies: any | never[];
}

type searchData = {
    id: number;
    poster_path: string;
    title: string;
    release_date: number;
    overview: string;
};

const SearchList: React.VFC<Props> = (props) => {
    return (
        <ul className="flex  w-full mb-5 flex-col  ">
            {props.movies.length ? (
                props.movies.map((item: searchData) => {
                    return (
                        <li
                            className="w-full mb-4"
                            key={item.id}
                            style={{ height: 132 }}
                        >
                            <NavLink to={`/detail-page/${item.id}`}>
                                <div className="flex w-full bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                                    {item.poster_path ? (
                                        <img
                                            style={{
                                                width: 92,
                                                height: 132,
                                            }}
                                            className="mr-4 search-poster-img"
                                            src={`https://image.tmdb.org/t/p/w92/${item.poster_path}`}
                                        />
                                    ) : (
                                        <img
                                            style={{
                                                width: 92,
                                                height: 132,
                                            }}
                                            className="mr-4 search-poster-img"
                                            src={"/images/title_no_image.png"}
                                        />
                                    )}
                                    <div className="py-2 pr-2">
                                        <div className="font-bold text-xl">
                                            {item.title}
                                        </div>
                                        <div className="text-gray-400 mb-4">
                                            公開日:
                                            {item.release_date}
                                        </div>
                                        <div className="">
                                            {(() => {
                                                if (
                                                    item.overview.length > 100
                                                ) {
                                                    const modStr =
                                                        item.overview.substr(
                                                            0,
                                                            100
                                                        ) + "...";
                                                    return modStr;
                                                } else {
                                                    return item.overview;
                                                }
                                            })()}
                                        </div>
                                    </div>
                                </div>
                            </NavLink>
                        </li>
                    );
                })
            ) : (
                <h1>なし</h1>
            )}
        </ul>
    );
};

export default SearchList;
