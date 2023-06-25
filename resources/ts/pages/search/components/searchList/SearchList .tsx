import React from "react";
import { NavLink } from "react-router-dom";
import { SearchTitle } from "../../../../types/Movie";

interface Props {
    SearchTitle: SearchTitle[] | never[];
}

const SearchList: React.VFC<Props> = (props) => {
    return (
        <>
            <ul className="flex  w-full mb-5 flex-col  ">
                {props.SearchTitle.length ? (
                    props.SearchTitle.map((item: SearchTitle) => {
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
                                                src={
                                                    "/images/title_no_image.png"
                                                }
                                            />
                                        )}
                                        <div className="py-2 pr-2">
                                            <div className="font-bold text-xl">
                                                {item.title}
                                            </div>
                                            <div className="text-gray-400 mb-2 xl:mb-4">
                                                公開日:
                                                {item.release_date}
                                            </div>
                                            <div className="text-sm xl:text-base">
                                                {(() => {
                                                    if (
                                                        item.overview.length >
                                                        100
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
                    <>
                        {/* <FontAwesomeIcon icon="faqusetion" /> */}
                        <h2 className=" font-bold mb-6">
                            検索したタイトルはこちらに表示されます。
                        </h2>
                        <p className="mb-2">
                            検索したタイトルが表示されませんか？
                        </p>
                        <ul className="tips-list mb-2">
                            <li className="tips-item">
                                <p className="tips-text cross">
                                    トイストーリー
                                </p>
                                <p className="tips-text circle">
                                    トイ・ストーリー
                                </p>
                            </li>
                            <li className="tips-item">
                                <p className="tips-text cross">
                                    ゴットファーザー
                                </p>
                                <p className="tips-text circle">
                                    ゴッドファーザー
                                </p>
                            </li>
                            <li className="tips-item">
                                <p className="tips-text cross">君に読む物語</p>
                                <p className="tips-text circle">
                                    きみに読む物語
                                </p>
                            </li>
                        </ul>
                        <p>
                            正しいタイトルでないと検索に引っかからない場合があります。一度、googleなどで正しいタイトルを調べ入力して見てください。
                        </p>
                    </>
                )}
            </ul>
        </>
    );
};

export default SearchList;
