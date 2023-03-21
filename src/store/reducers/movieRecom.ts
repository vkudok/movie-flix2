import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {MovieRecommendationType, MovieType} from "../../common/types";
import {getPopularMovies, getRecommendation} from "../../api";
import {MovieRecom, MovieState} from "../../common/interface";


const initialState: MovieRecom = {
    movieList: []
};

const setGlobalMovies = (
    state: MovieRecom,
    action: PayloadAction<MovieRecommendationType[]>
) => {
    state.movieList = action.payload;
};

export const movieListSlice = createSlice({
    name: 'recommendation',
    initialState,
    reducers: {
        setGlobalMovies
    },
    extraReducers: (builder) => {
        builder.addCase(getRecommendation.fulfilled, (state, action) => {
            state.movieList = action.payload;
        })
    },
});

export const {
    setGlobalMovies: setMovies
} = movieListSlice.actions;

export default movieListSlice.reducer
