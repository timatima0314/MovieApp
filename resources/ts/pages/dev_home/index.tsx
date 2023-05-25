import React from "react";
import TmdbList from "./components/TmdbList";
const DevHomePage: React.VFC = () => {
    return (
        <>
            <h1 className="text-red-400 text-4xl">dev-Home Page</h1>
            <img src="https://image.tmdb.org/t/p/w300/yUsSJ0vO8AM9HnDQWuGKMSzCKOP.jpg" />
            <TmdbList />
        </>
    );
};

export default DevHomePage;
