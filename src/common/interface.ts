import {MovieRecommendationType} from "./types";
import {MovieListResult} from "../movies/api";

export interface MovieState {
    movies: MovieListResult[];
    cacheMovies: MovieListResult[];
}

export interface MovieRecom {
    movieList: MovieRecommendationType[];
}