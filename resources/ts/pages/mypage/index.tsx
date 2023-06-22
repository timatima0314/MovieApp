import React from "react";
import MypageList from "./mypageList/mypageList";
// マイページ
const MyPage: React.VFC = () => {
    return (
        <>
            <main className="w-10/12 m-auto">
                <h1 className="text-red-400 text-4xl">あなたが登録した作品</h1>
                <MypageList />
            </main>
        </>
    );
};

export default MyPage;
