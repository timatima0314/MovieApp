import React from "react";
import { useQuery } from "react-query";
import { getPopularTmdbItem } from "../../../../api/TmdbApi";
const WelcomeView: React.VFC = () => {
    const { data, status } = useQuery("getWelcomeViewImg", getPopularTmdbItem);
    if (status === "loading") {
        return <span>Loading...</span>;
    } else if (status === "error") {
        return (
            <div className="text-center">
                データの読み込みに失敗しました。ネット環境をお確かめの上、もう一度試してください。
            </div>
        );
    } else if (!data || data.length <= 0) {
        return (
            <span>
                データを所得できませんでした。ネット環境を確認の上、もう一度お試しください。
            </span>
        );
    }
    // ランダムな整数をdataに入れ毎回welcome-viewの画像を変更する
    let randomIndex: number = Math.floor(Math.random() * 20);

    /**
     * @param {string} backfdrop_path 映画の画像パス
     */
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
