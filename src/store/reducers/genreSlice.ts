import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { MovieType } from "../../common/types";

type Movie = Omit<
    MovieType,
    "overview" | "vote_average" | "release_date" | "runtime" | "genres"
    >;

interface GenreState {
    movies: Movie[];

}

const initialState: GenreState = {
    movies: [],
};

const addFavoriteMovie = (
    state: GenreState,
    action: PayloadAction<Movie>
) => {
    const existingMovie = state.movies.find(
        (movie) => movie.id === action.payload.id
    );
    if (!existingMovie) {
        state.movies.push(action.payload);
    }
};

export const filterGenreSlice = createSlice({
    name: "filterGenre",
    initialState,
    reducers: {
        addFavoriteMovie
    },
});

export const {
    addFavoriteMovie: addFavorite,
} = filterGenreSlice.actions;

export default filterGenreSlice.reducer;
