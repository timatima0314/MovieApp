import React, { useState } from "react";
// import { useQuery } from "react-query";
import { NavLink } from "react-router-dom";
import { getTmdbSearch } from "../../api/TmdbApi";
const SearchPage: React.VFC = () => {
    const [item, setItem] = useState("");
    const [xxxx, yyyy]: [xxxx: any, yyyy: any] = useState([]);
    const search = (e:any) => {
        e.preventDefault();
        getTmdbSearch(item)
            .then((i) => {
                yyyy(i);
            })
            // todo エラー記述
            .catch(() => {});
    };
    console.log(xxxx);

    return (
        <main className="w-10/12 m-auto">
            <h1 className="text-red-400 text-4xl">SearchPage</h1>
            <form onSubmit={search}>
                <input
                    className="shadow appearance-none border rounded w-50 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    value={item}
                    onChange={(e) => setItem(e.target.value)}
                />
                <button>search</button>
            </form>
            <ul className="flex  w-full mb-5 flex-col  ">
                {xxxx.map((item: any) => {
                    return (
                        <li
                            className="w-full mb-4"
                            key={item.id}
                            style={{ height: 132 }}
                        >
                            <NavLink to={`/singl-page/${item.id}`}>
                                <div className="flex w-full bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                                    <img
                                        style={{ width: 92, height: 132 }}
                                        className="mr-4 search-poster-img"
                                        src={`https://image.tmdb.org/t/p/w92/${item.poster_path}`}
                                    />
                                    <div className="py-2 pr-2">
                                        <div className="font-bold text-xl">
                                            {item.title}
                                        </div>
                                        <div className="text-gray-400 mb-4">
                                            公開日:{item.release_date}
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
                })}
            </ul>
        </main>
    );
};

export default SearchPage;
