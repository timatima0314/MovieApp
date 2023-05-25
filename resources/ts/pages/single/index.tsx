import React from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { getTmdbDetails } from "../../api/TmdbApi";
const SinglePage: React.VFC = (props: any) => {
    const id = props.match.params.id;
    const { data, status } = useQuery("single", () => getTmdbDetails(id));
    if (status === "loading") {
        return <h1>Loading...</h1>;
    } else if (status === "success") {
        const i = data.credits.cast.slice(0, 10);
        console.log(i);
    }
    // console.log(data);

    return (
        <main className="w-10/12 m-auto">
            <h1>シングルページ</h1>
            <div className="flex w-10/12 justify-center">
                <div className="w-full flex justify-center">
                    <img
                        className="items-center max-w-none"
                        src={`https://image.tmdb.org/t/p/w300/${data.poster_path}`}
                    />
                </div>
                <div>
                    <div className="title-box">
                        <h2>{data.title}</h2>
                        <div>ジャンル</div>
                    </div>
                    <div className="summary-box">
                        <div className="summary-title">概要</div>
                        <p className="summary-text">
                            With the price on his head ever increasing, John
                            Wick uncovers a path to defeating The High Table.
                            But before he can earn his freedom, Wick must face
                            off against a new enemy with powerful alliances
                            across the globe and forces that turn old friends
                            into foes.
                        </p>
                    </div>
                    <div className="staff-box">
                        <ul>
                            <li>
                                <div>監督</div>
                                <p>aaa aaaaa</p>
                            </li>
                            <li>
                                <div>助監督</div>
                                <p>aaa aaaaa</p>
                            </li>
                            <li>
                                <div>ディレクター</div>
                                <p>aaa aaaaa</p>
                            </li>
                            <li>
                                <div>その他</div>
                                <p>aaa aaaaa</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div></div>

            <ul className="flex flex-row w-full overflow-x-scroll">
                {data.credits.cast.slice(0, 10).map((v: any) => {
                    return (
                        <li
                            key={v.id}
                            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 whitespace-wrap w-max"
                        >
                            <img
                                className="max-w-none rounded-t-lg"
                                src={`https://image.tmdb.org/t/p/w154/${v.profile_path}`}
                            />
                            <div className="p-3 ">
                                <div className="font-bold">{v.name}</div>
                                <div>{v.character}</div>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </main>
    );
};
export default SinglePage;
