export interface Genre {
    id: number;
    name: string;
}

export interface Arg {
    key: string;
    value?: string | number | (string | number)[];
}

export interface ProductionCompany {
    name: string;
    id: number;
    logo_path: string | null;
    origin_country: string;
}

export interface ProductionCountry {
    iso_3166_1: string;
    name: string;
}

export interface Language {
    iso_639_1: string;
    name: string;
}

export interface Movie {
    adult: boolean;
    backdrop_path: string | null;
    belongs_to_collection: object | null;
    budget: number;
    genres: Genre[];
    homepage: string | null;
    id: number;
    imdb_id: string | null;
    original_language: string;
    original_title: string;
    overview: string | null;
    popularity: number;
    poster_path: string | null;
    production_companies: ProductionCompany[];
    production_countries: ProductionCountry[];
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages: Language[];
    status: string;
    tagline: string | null;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export interface MovieInfoType {
    name: string;
    genre: string;
    tmdbId: number;
}

export interface RecommendationInfoType {
    recommendation: RecommendationType[]
}

export interface RecommendationType {
    title: string;
    movie_id: number;
    tmdbId: number;
}

export interface MovieRating {
    userId: string,
    movieId: number,
    rating: number,
    timestamp: string
}

export interface GeneralMoviePageInfo {
    userId: string,
    movieId: number,
}

export interface MovieInfo {
    movieInfo: MovieInfoType[];
}

export interface GenreListType {
    id: number,
    name: string
}

export interface GenreList {
    genres: GenreListType[]
}

export interface MovieListResult {
    adult: boolean;
    backdrop_path: string | null;
    id: number;
    video: boolean;
    genre_ids: number[];
    original_language: string;
    original_title: string;
    overview: string | null;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    vote_average: number;
    vote_count: number;
}

export interface MovieVideoType {
    id: string;
    iso_639_1: string;
    iso_3166_1: string;
    key: string;
    name: string;
    official: boolean;
    published_at: string;
    site: string;
    size: number;
    type: string;
}

export interface MovieVideoResult {
    id: number;
    results: MovieVideoType[];
}

export type MovieType = {
    id: number;
    poster_path: string;
    original_title: string;
    overview: string;
    vote_average: number;
    release_date: number;
    runtime: number;
    genre_ids: Array<number>;
};

export type MovieDataType = Omit<
    MovieType,
    "overview" | "release_date" | "runtime" | "genre_ids"
    >;