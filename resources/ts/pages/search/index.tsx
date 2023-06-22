import React, { useState, useEffect } from "react";
import SearchFirstView from "./components/searchFirstView/SearchFirstView";
import SearchList from "./components/searchList/SearchList ";
import { SearchTitle } from "../../types/Movie";

//検索ぺージ
const SearchPage: React.VFC = () => {
    const [searchTitle, setSearchTitle] = useState<SearchTitle[] | never[]>([]);
    const handleSetSearchTitle = (val: SearchTitle[]) => {
        val.length == 0 && alert("入力されたタイトルはありませんでした。");
        setSearchTitle(val);
    };
    return (
        <>
            <SearchFirstView handleSetSearchTitle={handleSetSearchTitle} />
            <main className="w-10/12 m-auto">
                <SearchList SearchTitle={searchTitle} />
            </main>
        </>
    );
};

export default SearchPage;
