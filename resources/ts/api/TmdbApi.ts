import axios from "axios";
// 人気の映画
const getPopularTmdbItem = async () => {
    const { data } = await axios.get(`${process.env.MIX_TMDB_ENDPOINT}movie/popular?api_key=${process.env.MIX_TMDB_APP_KEY}&language=ja-JA&page=1`)
    // const { data } = await axios.get(`https://api.themoviedb.org/3/movie/343611?api_key=837304d654cf0a36c4bce744ca21baa3&append_to_response=credits`)
    // console.log(`人気の映画=>${data}`)
    return data.results
};
// 評価の高い映画
const getTopRatedTmdbItem = async () => {
    const { data } = await axios.get(`${process.env.MIX_TMDB_ENDPOINT}movie/top_rated?api_key=${process.env.MIX_TMDB_APP_KEY}&language=ja-JA&page=1`)
    // const { data } = await axios.get(`https://api.themoviedb.org/3/movie/343611?api_key=837304d654cf0a36c4bce744ca21baa3&append_to_response=credits`)
    // console.log(`人気の映画=>${data}`)
    return data.results
};
// 上映中の映画
const getNowPlayingTmdbItem = async () => {
    const { data } = await axios.get(`${process.env.MIX_TMDB_ENDPOINT}movie/now_playing?api_key=${process.env.MIX_TMDB_APP_KEY}&language=ja-JA&page=1`)
    // const { data } = await axios.get(`https://api.themoviedb.org/3/movie/343611?api_key=837304d654cf0a36c4bce744ca21baa3&append_to_response=credits`)
    // console.log(`人気の映画=>${data}`)
    return data.results
};

// 詳細データ,日本語訳対応しているが、overviewなどは日本語訳がない場合がありその場合nullになる。
const getTmdbDetailsJa = async (id: any) => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.MIX_TMDB_APP_KEY}&language=ja-JA&append_to_response=credits`)
    // const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.MIX_TMDB_APP_KEY}&append_to_response=credits`)

    // console.log(data)
    return data
}
// 詳細データの英語バージョン。overview参照に用いる。
const getTmdbDetails = async (id: any) => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.MIX_TMDB_APP_KEY}&append_to_response=credits`)
    // const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.MIX_TMDB_APP_KEY}&language=ja-JA&append_to_response=credits`)
    // console.log(data)
    return data
}

export { getPopularTmdbItem, getTopRatedTmdbItem, getTmdbDetailsJa, getTmdbDetails, getNowPlayingTmdbItem }