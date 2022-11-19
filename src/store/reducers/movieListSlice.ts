import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { MovieType } from "../../common/types";
import {getMovies} from "../../api";

interface GenreState {
    movies: MovieType[];
}

const initialState: GenreState = {
    movies: [],
};

export const movieListSlice = createSlice({
    name: 'movieList',
    initialState,
    reducers: {
//         setGlobalMovies
    },
    extraReducers: (builder) => {
        builder.addCase(getMovies.fulfilled, (state, action) => {
            state.movies = action.payload;
        })
    },
});

export default movieListSlice.reducer
