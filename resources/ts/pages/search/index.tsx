import React, { useState } from "react";
import SearchFirstView from "./components/searchFirstView/SearchFirstView";
import SearchList from "./components/searchList/SearchList ";
const SearchPage: React.VFC = () => {
    const [movies, setMovies] = useState([]);
    const handleSetMovies = (val: any) => {
        setMovies(val);
    };
    return (
        <>
            <SearchFirstView handleSetMovies={handleSetMovies} />
            <main className="w-10/12 m-auto">
                <SearchList movies={movies} />
            </main>
        </>
    );
};

export default SearchPage;
