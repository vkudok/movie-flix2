import {useEffect} from "react";
import * as S from "./styles";
import {MovieBoxLogo} from "../../assets";
import {NavLink} from "react-router-dom";
import Genres from "../../components/Genres";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../store";
import {getPopularMovies} from "../../api";
import MovieList from "../../components/MovieList";

export default function Home() {
    const page = 1;

    const dispatch = useDispatch<AppDispatch>();

    const stateMovies = useSelector((state: RootState) => state.movieList)

    useEffect(() => {
        dispatch(getPopularMovies({page}))
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

            <S.Container>
                <Genres></Genres>
            </S.Container>

            <MovieList movies={stateMovies.movies}></MovieList>
        </>
    );
}
