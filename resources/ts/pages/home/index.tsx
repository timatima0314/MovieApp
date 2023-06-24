import React from "react";
import PopularTmdbList from "./components/popular/PopularTmdbList";
import TopRatedTmdbList from "./components/topRatede/TopRatedTmdList";
import NowPlayingTmdbList from "./components/nowPlaying/NowPlayingTmdbList";
import WelcomeView from "./components/welcomeView/WelcomeView";
const HomePage: React.VFC = () => {
    return (
        <>
            <WelcomeView />
            <main className="w-10/12 m-auto">
                <PopularTmdbList />
                <TopRatedTmdbList />
                <NowPlayingTmdbList />
            </main>
        </>
    );
};

export default HomePage;
