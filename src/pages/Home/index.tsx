import {useEffect, useState} from "react";
import * as S from "./styles";
import api from "../../sevices/filmApi";
import {MovieType} from "../../common/types";
import {MovieBoxLogo} from "../../assets";
import MovieCard, {MovieDataType} from "../../components/MovieCard";
import {NavLink} from "react-router-dom";
import Genres from "../../components/Genres";

export default function Home() {
    const page = 1;
    const [homeState, setHomeState] = useState<MovieType[]>();

    useEffect(() => {
        api.get(
            `/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
        ).then((resp) => {
            const movieList = resp.data.results;
            setHomeState(movieList);
        });
    }, [setHomeState]);

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

            <S.PageTitle>Movies</S.PageTitle>

            <S.Container>
                <Genres></Genres>
            </S.Container>

            <S.MovieList>
                {
                    homeState?.map(
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
