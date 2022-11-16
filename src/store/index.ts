import { configureStore } from "@reduxjs/toolkit";

import filterGenreSlice from "./reducers/genreSlice";

export const store = configureStore({
    reducer: {
        filterGenre: filterGenreSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
