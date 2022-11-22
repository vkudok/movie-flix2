import {useEffect, useState} from "react";
import * as S from "./styles";
import api from "../../sevices/filmApi";
import {MovieType} from "../../common/types";
import {MovieBoxLogo} from "../../assets";
import MovieCard, {MovieDataType} from "../../components/MovieCard";
import {NavLink} from "react-router-dom";
import Genres from "../../components/Genres";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../store";
import {getMovies} from "../../api";

export default function Home() {
    const page = 1;

    const dispatch = useDispatch<AppDispatch>();

    const stateMovies = useSelector((state: RootState) => state.movieList)

    useEffect(() => {
        dispatch(getMovies({page}))
    }, [])

    return (
        <>
            <header>
                <nav>
                    <NavLink to={"/"}>
                        <MovieBoxLogo/>
                    </NavLink>
                    <S.Link to="/favorites">Favorites</S.Link>
                </nav>
            </header>

            {/*<S.PageTitle>Movies</S.PageTitle>*/}

            <S.Container>
                <Genres></Genres>
            </S.Container>

            <S.MovieList>
                {
                    stateMovies.movies.map(
                        ({id, poster_path, original_title, vote_average}: MovieDataType) => {
                            return (
                                <li key={id}>
                                    <NavLink to={"/movie/" + id}>
                                        <MovieCard
                                            id={id}
                                            original_title={original_title}
                                            poster_path={poster_path}
                                            vote_average={vote_average}
                                        />
                                    </NavLink>
                                </li>
                            );
                        }
                    )
                }
            </S.MovieList>

        </>
    );
}
