import {MovieRecommendationType, MovieType} from "./types";

export interface MovieState {
    movies: MovieType[];
    cacheMovies: MovieType[];
}

export interface MovieRecom {
    movieList: MovieRecommendationType[];
}