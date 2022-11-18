import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { MovieType } from "../../common/types";

interface GenreState {
    movies: MovieType[];
}

const initialState: GenreState = {
    movies: [],
};

const setGlobalMovies = (
    state: GenreState,
    action: PayloadAction<MovieType[]>
) => {
    console.log(action.payload);
    state.movies = action.payload;
};

export const movieListSlice = createSlice({
    name: "movieList",
    initialState,
    reducers: {
        setGlobalMovies
    },
});

export const {
    setGlobalMovies: setGlobalMovieList,
} = movieListSlice.actions;

export default movieListSlice.reducer;
