import {createAsyncThunk} from "@reduxjs/toolkit";
import api from "../sevices/filmApi";
import {useDispatch} from "react-redux";
import axios from "axios";

/**
 * Проверяет изменения в полях ввода (не учитывает поля-флаги).
 *
 * @param {number} page Номер страницы
 */
interface IGetMovieRequest {
    page: number
}

interface IGetRecommendation {
    tmdbId: number,
    valueNumber: number
}

export const getPopularMovies = createAsyncThunk(
    'movies/get',
    async (payload: IGetMovieRequest) => {
        const { data } = await api.get( `/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&page=${payload.page}`);
        return data.results;
    },
);

export const getRecommendation = createAsyncThunk(
    'type/postData',
    async (payload:IGetRecommendation) => {
        try {
            const response = await axios.post(` http://127.0.0.1:8000/getRecom?tmdbId=${payload.tmdbId}&valueNumber=${payload.valueNumber}`);
            return response.data;
        } catch (err) {
            console.error(err)
        }
    },
);