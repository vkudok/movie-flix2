import MovieCard from "../MovieCard";
import {NavLink} from "react-router-dom";
import * as S from "./styles";
import {MovieDataType, MovieType} from "../../common/types";
import {MovieListResult} from "../../movies/api";

export default function MovieList(props: {movies: MovieListResult[]}) {
     return (
        <>
            <S.MovieList>
                {
                    props.movies.map(
                        ({id, poster_path, original_title, vote_average}:  MovieListResult) => {
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