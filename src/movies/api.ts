import {
  fetchEndpoint,
  fetchPaginated,
  findMovieEndpoint,
  getRecommendationEndpoint,
  setRatingEndpoint
} from "../common/api";

export interface Genre {
  id: number;
  name: string;
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

export interface RecommendationInfoType{
  recommendation: RecommendationType[]
}

export interface RecommendationType{
  title: string;
  movie_id: number;
  tmdbId: number;
}

export interface MovieRating{
  userId: string,
  movieId: number,
  rating: number,
  timestamp: string
}

export interface MovieInfo {
  movieInfo: MovieInfoType[];
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

export const fetchMovies = (endpoint: string, page: number) => {
  return fetchPaginated<MovieListResult>(endpoint, page);
};

export const fetchMovie = (movieId: number) => {
  return fetchEndpoint<Movie>(`movie/${movieId}`);
};

export const findMovieIdByTmdbId = (movieInfo: MovieInfo | undefined) => {
  return findMovieEndpoint<number[]>(movieInfo );
};

export const getRecommendation = (tmdbId: number, valueNumber: number) => {
  return getRecommendationEndpoint<RecommendationInfoType>(tmdbId, valueNumber);
};

export const setRating = (movieRating: MovieRating | undefined) => {
  return setRatingEndpoint<string>(movieRating);
};