
import {
    GeneralMoviePageInfo,
    Movie,
    MovieInfo,
    MovieListResult,
    MovieRating, MovieVideoResult,
    RecommendationInfoType
} from "../interfaces/interfaces";
import {
    fetchEndpoint,
    fetchPaginated,
    findMovieEndpoint,
    getRecommendationEndpoint, getUserRatingEndpoint,
    setRatingEndpoint
} from "./services";


export const fetchMovies = (endpoint: string, page: number) => {
    return fetchPaginated<MovieListResult>(endpoint, page);
};

export const fetchMovie = (endpoint: string) => {
    return fetchEndpoint<Movie>(endpoint);
};

export const fetchMovieVideo = (endpoint: string) => {
    return fetchEndpoint<MovieVideoResult>(endpoint);
};

export const findMovieIdByTmdbId = (movieInfo: MovieInfo | undefined) => {
    return findMovieEndpoint<number[]>(movieInfo);
};

export const getRecommendation = (tmdbId: number, valueNumber: number) => {
    return getRecommendationEndpoint<RecommendationInfoType>(tmdbId, valueNumber);
};

export const setRating = (movieRating: MovieRating | undefined) => {
    return setRatingEndpoint<string>(movieRating);
};

export const getUserRating = (movieRating: GeneralMoviePageInfo | undefined) => {
    return getUserRatingEndpoint<number>(movieRating);
};