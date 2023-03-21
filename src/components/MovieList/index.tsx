import MovieCard, {MovieDataType} from "../MovieCard";
import {NavLink} from "react-router-dom";
import * as S from "./styles";
import {MovieType} from "../../common/types";

export default function MovieList(props: {movies: MovieType[]}) {
    console.log(props.movies);
    return (
        <>
            <S.MovieList>
                {
                    props.movies.map(
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