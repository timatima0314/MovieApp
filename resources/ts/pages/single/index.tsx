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
        // const i = data.credits.cast.slice(0, 10);
        const i = data;
        console.log(i);
    }
    let x = data.vote_average / 2;
    // let x = 5;
    switch (true) {
        case x < 0.5:
            console.log(0);
            x = 0;
            break;
        case x >= 0.5 && x < 1:
            console.log(0.5);
            break;
        case x >= 1 && x < 1.5:
            console.log(1);
            break;
        case x >= 1.5 && x < 2:
            console.log(1.5);
            break;
        case x >= 2 && x < 2.5:
            console.log(2);
            break;
        case x >= 2.5 && x < 3:
            console.log(2.5);
            break;
        case x >= 3 && x < 3.5:
            console.log(3);
            break;
        case x > 3.5 && x < 4:
            console.log(3.5);
            x = 3.5;
            break;
        case x >= 4 && x < 4.5:
            console.log(4);
            x = 4;
            break;
        case x >= 4.5 && x < 5:
            console.log(4.5);
            break;
        case x === 5:
            console.log(5);
            break;
    }
    return (
        <>
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
                                Wick uncovers a path to defeating The High
                                Table. But before he can earn his freedom, Wick
                                must face off against a new enemy with powerful
                                alliances across the globe and forces that turn
                                old friends into foes.
                            </p>
                        </div>
                        <img src="/images/icon_star_edge.png" />
                        <div className="review-container">
                            <div className="score">{x}</div>
                            <div
                                className={`star-rating star-rating-${x * 10}`}
                            >
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <div className="star-rating-front">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                            <p className="review-number">
                                <a href="">クチコミ 10件</a>
                            </p>
                            i
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
                <div>主な出演者</div>

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
        </>
    );
};
export default SinglePage;
