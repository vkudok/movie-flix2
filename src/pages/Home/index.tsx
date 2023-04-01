import {createContext, useState} from "react";
import * as S from "./styles";
import {MovieBoxLogo} from "../../assets";
import {NavLink} from "react-router-dom";
import Genres from "../../components/Genres";
import MovieList from "../../components/MovieList";
import {useQuery} from "react-query";
import {fetchMovies} from "../../movies/api";

export const MoviesContext = createContext({});

export default function Home() {
    const page = 1;
    const endpoint = "movie/popular";

    const moviesQuery = useQuery(["movie", endpoint, page], () =>
        fetchMovies(endpoint, page)
    );
    // const [movies, setMovies] = useState(moviesQuery.data);

    return (
        // <MoviesContext.Provider value={{movies, setMovies}}>
        <>
            <header>
                <nav>
                    <NavLink to={"/"}>
                        <MovieBoxLogo/>
                    </NavLink>
                    <S.Link to="/favorites">Favorites</S.Link>
                </nav>
            </header>
            {/*<S.Container>*/}
            {/*    {(movies && movies.results) && <Genres movies={movies?.results}></Genres>}*/}
            {/*</S.Container>*/}
            {(moviesQuery && moviesQuery.data) && <MovieList movies={moviesQuery.data.results}></MovieList>}
        </>
        // </MoviesContext.Provider>
    );
}
