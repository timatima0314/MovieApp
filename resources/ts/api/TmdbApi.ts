import axios from "axios";
// 人気の映画情報所得
const getPopularTmdbItem = async () => {
    const { data } = await axios.get(`${process.env.MIX_TMDB_ENDPOINT}movie/popular?api_key=${process.env.MIX_TMDB_APP_KEY}&language=ja-JA&page=1`)
    return data.results
};

// 評価の高い映画情報所得
const getTopRatedTmdbItem = async () => {
    const { data } = await axios.get(`${process.env.MIX_TMDB_ENDPOINT}movie/top_rated?api_key=${process.env.MIX_TMDB_APP_KEY}&language=ja-JA&page=1`)
    return data.results
};
// 上映中の映画情報所得
const getNowPlayingTmdbItem = async () => {
    const { data } = await axios.get(`${process.env.MIX_TMDB_ENDPOINT}movie/now_playing?api_key=${process.env.MIX_TMDB_APP_KEY}&language=ja-JA&page=1`)
    return data.results
};

// 詳細データ,日本語訳対応しているが、overviewなどは日本語訳がない場合がありその場合nullになる。
const getTmdbDetailsJa = async (id: any) => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.MIX_TMDB_APP_KEY}&language=ja-JA&append_to_response=credits`)
    return data
}

// 詳細データの英語バージョン。overview参照に用いる。
const getTmdbDetails = async (id: any) => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.MIX_TMDB_APP_KEY}&append_to_response=credits`)
    return data
}

// タイトル検索し該当の映画情報所得
const getTmdbSearch= async(searchTitle:string)=>{
    const {data}=await axios.get(`https://api.themoviedb.org/3/search/movie?query=${searchTitle}&api_key=${process.env.MIX_TMDB_APP_KEY}&language=ja-JA`)
    return data.results
}
export { getPopularTmdbItem, getTopRatedTmdbItem, getTmdbDetailsJa, getTmdbDetails, getNowPlayingTmdbItem ,getTmdbSearch}