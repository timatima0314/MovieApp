import React from "react";
import { useQuery } from "react-query";
import { getPopularTmdbItem } from "../../../../api/TmdbApi";
const WelcomeView: React.VFC = () => {
    const { data, isLoading } = useQuery("getWelcomeViewImg", getPopularTmdbItem);
    if (isLoading) {
        return <span>Loading...</span>;
    }
    // ランダムな整数をdataに入れ毎回welcome-viewの画像を変更する
    let randomIndex = Math.floor(Math.random() * 20);
    const { backdrop_path } = data[randomIndex];
    return (
        <div
            className="welcome-view "
            style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/w1280${backdrop_path})`,
            }}
        >
            <div className="welcome-view__content flex w-10/12 m-auto text-center flex-col font-bold justify-center text-white h-full">
                <div className="text-4xl mb-2">ようこそ！</div>
                <div className="text-2xl">
                    何百万もの映画の中からあなたが見た映画を登録しよう！
                </div>
            </div>
        </div>
    );
};

export default WelcomeView;
