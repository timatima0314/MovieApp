import React, { useState } from "react";
import { getTmdbSearch } from "../../../../api/TmdbApi";
import { pick } from "lodash";
import { SearchTitle } from "../../../../types/Movie";
interface Props {
    handleSetSearchTitle: any;
}
const SearchFirstView: React.VFC<Props> = (props) => {
    const [keywordSearch, setKeyword] = useState<string>("");
    let newItem: SearchTitle[] = [];
    const search = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (keywordSearch === "") {
            alert("何か入力しましょう。");
            return;
        }
        getTmdbSearch(keywordSearch)
            .then((data) => {
                data.map((item: any) => {
                    const searchItem: SearchTitle = pick(item, [
                        "id",
                        "poster_path",
                        "title",
                        "release_date",
                        "overview",
                    ]);
                    newItem.push(searchItem);
                });
                props.handleSetSearchTitle(newItem);
            })
            .catch(() => {
                return (
                    <h1>
                        データを所得できませんでした。ネット環境を確認の上、もう一度お試しください。
                    </h1>
                );
            });
    };

    return (
        <div className="search__first-view flex flex-col justify-center mb-4">
            <h1 className="text-4xl text-white text-center mb-4">
                お探しのタイトルを入力しましよう！
            </h1>
            Ï{" "}
            <form onSubmit={search} className=" text-center">
                <input
                    className="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    value={keywordSearch}
                    onChange={(e) => setKeyword(e.target.value)}
                />
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                    search
                </button>
            </form>
        </div>
    );
};

export default SearchFirstView;
