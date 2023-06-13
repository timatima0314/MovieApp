import React from "react";
import { useCreateMovie } from "../../../../queries/MovieQuery";
import axios from "axios";
interface Props {
    dataJa: any;
    dataEn: any;
}
const DetailPageFirstView: React.VFC<Props> = ({ dataJa, dataEn }) => {
    interface Array {
        id: number;
        name: string;
    }
    const creatMovie = useCreateMovie();

    /**
     *@param {String} title タイトル
     *@param {Array[]} genres  ジャンル
     *@param {Any} poster_path ポスター画像のパス
     *@param {Number} vote_average TmdbAPIの総合評価
     *@param {string} overview 日本語訳された概要
     *@param {string} original_title オリジナルタイトル
     *@param {string} status 公開されたかどうか
     */

    const {
        title,
        genres,
        poster_path,
        backdrop_path,
        vote_average,
        overview,
        original_title,
        status,
    }: {
        title: string;
        genres: Array[];
        poster_path: any;
        backdrop_path: any;
        vote_average: number;
        overview: string;
        original_title: string;
        status: string;
    } = dataJa;
    /**
     * @param {string} overviewEn 英語の概要
     */
    const { overview: overviewEn }: { overview: string } = dataEn;

    // TmdbAPIの評価が10段階のため2でわる
    let evaluation: number = vote_average / 2;
    // 総合評価
    let comprehensive_evaluation: number = 0;
    // 総合評価は('0','0.5','1','1.5','2','2.5','3','3.5','4','4.5','5')とする
    switch (true) {
        case evaluation < 0.5:
            comprehensive_evaluation = 0;
            break;
        case evaluation >= 0.5 && evaluation < 1:
            comprehensive_evaluation = 0.5;
            break;
        case evaluation >= 1 && evaluation < 1.5:
            comprehensive_evaluation = 1;
            break;
        case evaluation >= 1.5 && evaluation < 2:
            comprehensive_evaluation = 1.5;
            break;
        case evaluation >= 2 && evaluation < 2.5:
            comprehensive_evaluation = 2;
            break;
        case evaluation >= 2.5 && evaluation < 3:
            comprehensive_evaluation = 2.5;
            break;
        case evaluation >= 3 && evaluation < 3.5:
            comprehensive_evaluation = 3;
            break;
        case evaluation > 3.5 && evaluation < 4:
            comprehensive_evaluation = 3.5;
            break;
        case evaluation >= 4 && evaluation < 4.5:
            comprehensive_evaluation = 4;
            break;
        case evaluation >= 4.5 && evaluation < 5:
            comprehensive_evaluation = 4.5;
            break;
        case evaluation === 5:
            comprehensive_evaluation = 5;
            break;
    }
    const handleSubmit = () => {
        console.log(title);
        creatMovie.mutate(title);
        // setTitle("");
    };
    

    return (
        <>
            <div
                className="first-view "
                style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/w1280${backdrop_path})`,
                }}
            >
                <div className="flex w-10/12 first-view__content text-white">
                    <div className="mr-8 my-auto" style={{ width: 300 }}>
                        {poster_path ? (
                            <img
                                width="300"
                                height="450"
                                className="items-center max-w-none"
                                src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
                            />
                        ) : (
                            <img
                                width="300"
                                height="450"
                                className="items-center max-w-none"
                                src={"/images/title_no_image.png"}
                            />
                        )}
                    </div>
                    <div className="w-full flex flex-col justify-center ">
                        <div className="title-box">
                            <h2 className="text-4xl font-bold mb-2">{title}</h2>
                            <div className="flex mb-2">
                                <div className="font-bold mr-3 text-xl 	">
                                    ジャンル
                                </div>
                                <ul className="flex items-center flex-wrap text-gray-300">
                                    {genres.map((item: any) => {
                                        return (
                                            <li
                                                className="mr-3"
                                                key={item.name}
                                            >
                                                {item.name}
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                        <div className="summary-box mb-2">
                            <div className="summary-title font-bold text-xl	">
                                概要
                            </div>
                            <p className="summary-text text-gray-300">
                                {overview
                                    ? (() => {
                                          if (overview.length > 400) {
                                              const modStr =
                                                  overview.substr(0, 400) +
                                                  "...";
                                              return modStr;
                                          } else {
                                              return overview;
                                          }
                                      })()
                                    : overviewEn}
                            </p>
                        </div>
                        <div className="review-container flex items-center mb-2">
                            <div className="font-bold text-xl mr-2">評価</div>
                            <div
                                className={`star-rating star-rating-${
                                    comprehensive_evaluation * 10
                                }`}
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
                                <div className="score text-gray-300">
                                    {comprehensive_evaluation}
                                </div>
                            </div>
                        </div>
                        <div className="other-box">
                            <ul>
                                <li className="flex items-center mb-2">
                                    <div className="font-bold text-xl mr-2">
                                        原題
                                    </div>
                                    <p className="text-gray-300">
                                        {original_title}
                                    </p>
                                </li>
                                <li className="flex items-center mb-2">
                                    <div className="font-bold text-xl mr-2">
                                        状態
                                    </div>
                                    <p className="text-gray-300">
                                        {(() => {
                                            if (status === "Released") {
                                                return "公開";
                                            } else {
                                                return "不明";
                                            }
                                        })()}
                                    </p>
                                </li>
                                <button
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                                    onClick={handleSubmit}
                                >
                                    登録する
                                </button>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DetailPageFirstView;
