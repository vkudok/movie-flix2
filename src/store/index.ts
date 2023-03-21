import {configureStore} from "@reduxjs/toolkit";
import movieListSlice from "./reducers/movieListSlice";
import movieRecom from "./reducers/movieRecom";


export const store = configureStore({
    reducer: {
        movieList: movieListSlice,
        recommendation: movieRecom,
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;