import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { MovieType } from "../../common/types";
import {getMovies} from "../../api";

interface MovieState {
    movies: MovieType[];
    cacheMovies: MovieType[];
}

const initialState: MovieState = {
    movies: [],
    cacheMovies: [],
};

const setGlobalMovies = (
    state: MovieState,
    action: PayloadAction<MovieType[]>
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
        builder.addCase(getMovies.fulfilled, (state, action) => {
            state.movies = action.payload;
            state.cacheMovies = action.payload;
        })
    },
});

export const {
    setGlobalMovies: setMovies
} = movieListSlice.actions;

export default movieListSlice.reducer
