import React from "react";
import PopularTmdbList from "./components/popular/PopularTmdbList";
import TopRatedTmdbList from "./components/topRatede/TopRatedTmdList";
import NowPlayingTmdbList from "./components/nowPlaying/NowPlayingTmdbList";
const HomePage: React.VFC = () => {
    return (
        <main className="w-10/12 m-auto">
            <h2 className="font-bold text-xl">人気の映画</h2>
            <PopularTmdbList />
            <h2 className="font-bold text-xl">評価の高い映画</h2>
            <TopRatedTmdbList />
            <h2 className="font-bold text-xl">上映中の映画</h2>
            <NowPlayingTmdbList />
        </main>
    );
};

export default HomePage;
