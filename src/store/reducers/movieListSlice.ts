import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {getPopularMovies} from "../../api";
import {MovieState} from "../../common/interface";
import {MovieListResult} from "../../movies/api";


const initialState: MovieState = {
    movies: [],
    cacheMovies: [],
};

const setGlobalMovies = (
    state: MovieState,
    action: PayloadAction<MovieListResult[]>
) => {
    state.movies = action.payload;
};

export const movieListSlice = createSlice({
    name: 'movieList',
    initialState,
    reducers: {
        setGlobalMovies
    },
    extraReducers: (builder) => {
        builder.addCase(getPopularMovies.fulfilled, (state, action) => {
            state.movies = action.payload;
            state.cacheMovies = action.payload;
        })
    },
});

export const {
    setGlobalMovies: setMovies
} = movieListSlice.actions;

export default movieListSlice.reducer
