import React from "react";
import MypageList from "./components/mypageList/mypageList";
// マイページ
const MyPage: React.VFC = () => {
    return (
        <>
            <main className="w-10/12 m-auto">
                <h1 className="font-bold text-xl mb-10">あなたが登録した作品</h1>
                <MypageList />
            </main>
        </>
    );
};

export default MyPage;
