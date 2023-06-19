export type Movie = {
    id: number;
    title: string;
    created_at: Date;
    updated_at: Date;
    poster_path: string
    user_id: number
    title_id: number
};

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