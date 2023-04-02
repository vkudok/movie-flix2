import * as S from "./styles"
import {useContext, useEffect, useState} from "react";
import api from "../../sevices/filmApi";
import Select, {SingleValue} from 'react-select';
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../store";
import {MovieListResult} from "../../movies/api";
import {MoviesContext} from "../../pages/Home";

export default function Genres(props: {movies: MovieListResult[]}) {
    // const {movies, setMovies} = useContext(MoviesContext);
    const [genreState, setGenreState] = useState(
        [
            {
                label: '',
                value: 0
            }
        ]
    );

    const movieState  = useSelector((state: RootState) => state.movieList);

    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        api.get(
            `/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}`
        ).then((resp) => {
            let localGenreList = [];
            let data = resp.data.genres;
            localGenreList.push({
                label: "All",
                value: 0
            });
            for(const genre in data){
                localGenreList.push({
                    label: data[genre].name,
                    value: data[genre].id
                });
            }
            setGenreState(localGenreList);
        });
    }, [setGenreState]);

    const onChangeFunction = (value: SingleValue<{ label: string; value: number; }>) => {
        // dispatch(setMovies(getMovieListByGenre(value, props.movies)));
    }

    return (
        <>
            <Select styles={S.customStyles} placeholder="Genre" options={genreState} onChange={onChangeFunction}/>
        </>
    );
}
