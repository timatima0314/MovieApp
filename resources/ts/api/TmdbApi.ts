import axios from "axios";
const getTmdbItem = async () => {
    const { data } = await axios.get(`${process.env.MIX_TMDB_ENDPOINT}movie/popular?api_key=${process.env.MIX_TMDB_APP_KEY}&language=ja-JA&page=1`)
    // const { data } = await axios.get(`https://api.themoviedb.org/3/movie/343611?api_key=837304d654cf0a36c4bce744ca21baa3&append_to_response=credits`)
    // console.log(`人気の映画=>${data}`)
    return data.results
};
const getTmdbDetails = async (id:any) => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.MIX_TMDB_APP_KEY}&language=ja-JA&append_to_response=credits`)
    // console.log(data)
    return data
}
export { getTmdbItem, getTmdbDetails }