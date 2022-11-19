import {createAsyncThunk} from "@reduxjs/toolkit";
import api from "../sevices/filmApi";
import {useDispatch} from "react-redux";

/**
 * Проверяет изменения в полях ввода (не учитывает поля-флаги).
 *
 * @param {number} page Номер страницы
 */
interface IGetMovieRequest {
    page: number
}

export const getMovies = createAsyncThunk(
    'movies/get',
    async (payload: IGetMovieRequest) => {
        const { data } = await api.get( `/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&page=${payload.page}`);
        return data.results;
    },

);
