import axios from "axios";
import { pick } from "lodash";
import { DetailMovie, Thumbnail } from '../types/Movie';

/**
 * type Thumbnail
 * @param {number} id TmdbAPIから所得する映画個々のid
 *@param {string} title 映画のタイトル
 *@param {string} poster_path poster_path ポスター画像のパス
*/

// 人気の映画情報所得
const getPopularTmdbItem = async () => {
    let popularTmdbItem: Thumbnail[] = []
    const { data } = await axios.get(`${process.env.MIX_TMDB_ENDPOINT}movie/popular?api_key=${process.env.MIX_TMDB_APP_KEY}&language=ja-JA&page=1`)
    data.results.map((item: any) => {
        const pickItem = pick(item, [
            "id",
            "title",
            "poster_path",
            "backdrop_path"])
        popularTmdbItem.push(pickItem)
    })

    return popularTmdbItem
};

// 評価の高い映画情報所得
const getTopRatedTmdbItem = async () => {
    let topRatedTmdbItem: Thumbnail[] = []
    const { data } = await axios.get(`${process.env.MIX_TMDB_ENDPOINT}movie/top_rated?api_key=${process.env.MIX_TMDB_APP_KEY}&language=ja-JA&page=1`)
    data.results.map((item: any) => {
        const pickItem = pick(item, [
            "id",
            "title",
            "poster_path"])
        topRatedTmdbItem.push(pickItem)
    })
    return topRatedTmdbItem
};
// 上映中の映画情報所得

const getNowPlayingTmdbItem = async () => {
    const nowPlayingTmdbItem: Thumbnail[] = []
    const { data } = await axios.get(`${process.env.MIX_TMDB_ENDPOINT}movie/now_playing?api_key=${process.env.MIX_TMDB_APP_KEY}&language=ja-JA&page=1`)
    data.results.map((item: any) => {
        const pickItem = pick(item, [
            "id",
            "title",
            "poster_path"])
        nowPlayingTmdbItem.push(pickItem)
    })
    return nowPlayingTmdbItem
};

// 詳細データ,日本語訳対応しているが、overviewなどは日本語訳がない場合がありその場合nullになる。
const getTmdbDetailsJa = async (id: number) => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.MIX_TMDB_APP_KEY}&language=ja-JA&append_to_response=credits`)
    const detailsJaPick: DetailMovie = (({ title,
        genres,
        poster_path,
        backdrop_path,
        vote_average,
        overview,
        original_title,
        credits,
        status }) => ({
            title,
            genres,
            poster_path,
            backdrop_path,
            vote_average,
            overview,
            original_title,
            credits,
            status
        }))(data)
    return detailsJaPick
}

// 詳細データの英語バージョン。overview参照に用いる。
const getTmdbDetails = async (id: number) => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.MIX_TMDB_APP_KEY}&append_to_response=credits`)
    const detailsEn = (({ overview }: { overview: string }) => ({ overview }))(data)
    return detailsEn
}

// タイトル検索し該当の映画情報所得
const getTmdbSearch = async (searchTitle: string) => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${searchTitle}&api_key=${process.env.MIX_TMDB_APP_KEY}&language=ja-JA`)
    return data.results
}
export { getPopularTmdbItem, getTopRatedTmdbItem, getTmdbDetailsJa, getTmdbDetails, getNowPlayingTmdbItem, getTmdbSearch }