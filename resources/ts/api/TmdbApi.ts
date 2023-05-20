import axios from "axios";
const getTmdbItem = async () => {
    const { data } = await axios.get(`${process.env.MIX_TMDB_ENDPOINT}movie/popular?api_key=${process.env.MIX_TMDB_APP_KEY}&language=ja-JA&page=1`)
    return data.results
};

export { getTmdbItem }