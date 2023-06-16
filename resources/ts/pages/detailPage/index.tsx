import React from "react";
import { useQuery } from "react-query";
import { getTmdbDetailsJa, getTmdbDetails } from "../../api/TmdbApi";
import DetailPageFirstView from "./components/detailPageFirstView/DetailPageFirstView";
import DetailPageCast from "./components/detailPageCast/DetailPageCast";
const DetailPage: React.VFC = (props: any) => {
    const id: number = props.match.params.id;

    /**
     * @param dataJa 日本語訳された詳細データ
     * @param dataEn 日本語訳されてない詳細データ
     */
    const { data: dataJa, status: statusJa } = useQuery("detailsJa", () =>
        getTmdbDetailsJa(id)
    );
    const { data: dataEn, status: statusEn } = useQuery("detailsEn", () =>
        getTmdbDetails(id)
    );
    if (statusJa === "loading") {
        return <h1 className="text-4xl font-bold">Loading...</h1>;
    }
    if (statusEn === "loading") {
        return <h1 className="text-4xl font-bold">Loading...</h1>;
    }

    return (
        <>
            <main className="main">
                <h1 className="font-bold text-xl leading-tight w-10/12 m-auto">
                    詳細ページ
                </h1>
                <DetailPageFirstView
                    dataJa={dataJa}
                    dataEn={dataEn}
                    title_id={id}
                />
                <DetailPageCast dataJa={dataJa} />
            </main>
        </>
    );
};
export default DetailPage;
