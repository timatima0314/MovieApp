import React from "react";
import { useMovies } from "../../../../queries/MovieQuery";
import { NavLink } from "react-router-dom";
import { Movie } from "../../../../types/Movie";

const MypageList: React.VFC = () => {
    const { data: movies, status } = useMovies();
    if (status === "loading") {
        return <div className="text-center">読み込み中</div>;
    } else if (status === "error") {
        return (
            <div className="text-center">データの読み込みに失敗しました。</div>
        );
    } else if (!movies || movies.length <= 0) {
        return (
            <div className="text-center">登録されたタイトルはありません。好きな映画を登録しよう。</div>
        );
    }
    return (
        <ul className="flex flex-row flex-wrap w-full mb-5 ">
            {movies.map((movie: Movie) => {
                return (
                    <li
                        className="block mb-2 max-w-sm p-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 mr-2"
                        key={movie.id}
                        style={{ width: 204 }}
                    >
                        <NavLink
                            className="truncate text-xs"
                            to={`/detail-page/${movie.title_id}`}
                        >
                            {movie.poster_path ? (
                                <img
                                    width={185}
                                    height={278}
                                    style={{ width: 185, height: 278 }}
                                    src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`}
                                />
                            ) : (
                                <img
                                    width={185}
                                    height={278}
                                    style={{ width: 185, height: 278 }}
                                    src={"/images/title_no_image.png"}
                                />
                            )}
                            <div className="text-base whitespace-normal my-auto">
                                {movie.title}
                            </div>
                        </NavLink>
                    </li>
                );
            })}
        </ul>
    );
};
export default MypageList;
