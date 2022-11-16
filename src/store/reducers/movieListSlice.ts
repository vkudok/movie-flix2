import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { MovieType } from "../../common/types";

interface GenreState {
    movieList: MovieType[];
}

const initialState: GenreState = {
    movieList: [],
};

const setGlobalMovies = (
    state: GenreState,
    action: PayloadAction<MovieType>
) => {
    state.movieList.push(action.payload);
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
