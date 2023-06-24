import HomePage from '../pages/home/index';
/**
 * Movieの型  DB:moviesテーブルレコード
*@param {number} id レコードid
 *@param {String} title 映画のタイトル
 *@param {Date} created_at 登録した日付
 *@param {Date} updated_at 更新した日付
 *@param {string} poster_path ポスター画像のパス
 *@param {number} user_id ユーザーid
 *@param {number} title_id TmdbAPIから所得する映画個々のid
 */

export type Movie = {
    id: number;
    title: string;
    created_at: Date;
    updated_at: Date;
    poster_path: string
    user_id: number
    title_id: number
};

/**
 * DetailMovieの型  映画の詳細データ
 *@param {String} title 映画のタイトル
 *@param {Array[{id: number; name: string}]} genres  ジャンル
 *@param {string} poster_path ポスター画像のパス
 *@param {Number} vote_average TmdbAPIの総合評価
 *@param {string} overview 日本語訳された概要
 *@param {string} original_title オリジナルタイトル
 *@param {string} status 公開されたかどうか
 */

export type DetailMovie = {
    title: string;
    genres: [{ id: number; name: string }];
    poster_path: string;
    backdrop_path: string;
    vote_average: number;
    overview: string;
    original_title: string;
    status: string;
}

/**
 * SearchTitleの型　タイトル検索後,取得するデータ
 *@param {number} id TmdbAPIから所得する映画個々のid
 *@param {string} poster_path ポスター画像のパス
 *@param {string | number} title 映画のタイトル
 *@param {Date} release_date 公開された日付
 *@param {string} overview 映画のあらすじ
 */

export type SearchTitle = {
    id: number
    poster_path: string
    title: string | number
    release_date: Date
    overview: string
};

/**
 * Thumbnailの型
 * @param {number} id TmdbAPIから所得する映画個々のid
 *@param {string} title 映画のタイトル
 *@param {string} poster_path poster_path ポスター画像のパス
*/
export type  Thumbnail= {
    id: number;
    title: string;
    poster_path: string;

}