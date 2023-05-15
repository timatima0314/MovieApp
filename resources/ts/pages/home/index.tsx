import React from "react";
import MovieList from "./components/MovieList";
import MoiveInput from "./components/MovieInput";

const HelpPage: React.VFC = () => {
    return (
        <>
            <h1 className="text-red-400 text-4xl">Home Page</h1>
            <MoiveInput />
            <MovieList />
        </>
    );
};

export default HelpPage;
