import { configureStore } from "@reduxjs/toolkit";

import movieListSlice from "./reducers/movieListSlice";
import api from "../sevices/filmApi";

function ApiGet (){
    api.get(
        `/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&page=1`
    ).then((resp) => {
        console.log(resp.data.results);
        return resp.data.results
        // const movieList = resp.data.results;
        // setHomeState(movieList);
    });
}



export const store = configureStore({
    reducer: {
        movieList: movieListSlice,
    }
    // reducer: {
    //     movieList: movieListSlice,
    // },
    // middleware:  (getDefaultMiddleware) =>
    //     getDefaultMiddleware({
    //         thunk: {
    //             extraArgument: ApiGet,
    //         }
    //     }),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
