import * as S from "./styles";
import {MovieBoxLogo} from "../../assets";
import {useEffect, useState} from "react";
import {Simulate} from "react-dom/test-utils";
import {NavLink, useLocation} from "react-router-dom"
import input = Simulate.input;
import api from "../../sevices/filmApi";
import {MoviePageType, MovieType} from "../../common/types";
import {AiFillStar} from "react-icons/ai";

export default function MoviePage() {

    const [movieState, setMovieState] = useState<MoviePageType>();
    const href = useLocation();
    const movieId = href.pathname.split('/')[2];
    useEffect(() => {
        api.get(
            // `/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
            `/movie/${movieId}?api_key=181911a338d5119b3964f38af18175e7`
        ).then((resp) => {
            setMovieState(resp.data);
        });
    }, [setMovieState]);

    // console.log(trailerState);

    return(
        <>

            <header>
                <nav>
                    <NavLink to={"/"}>
                        <MovieBoxLogo/>
                    </NavLink>
                </nav>
            </header>


            {/*<S.PageTitle>{movieState?.original_title}</S.PageTitle>*/}

            <S.Main>
                <S.BackdropPoster
                    src={`https://image.tmdb.org/t/p/w500${movieState?.poster_path}`}
                    alt={movieState?.original_title}
                />

                <S.Details>
                    <S.MoviePoster
                        src={`https://image.tmdb.org/t/p/w500${movieState?.poster_path}`}
                        alt={movieState?.original_title}
                    />

                    <div>
                        <h4>{movieState?.original_title}</h4>
                        <p>{movieState?.overview}</p>

                        <S.Rate>
                            <AiFillStar size={24} />
                            <span>{movieState?.vote_average}</span>
                        </S.Rate>

                        <S.TechnicalDetails>
              <span>
                Type
                <strong>Movie</strong>
              </span>
                            <span>
                Release Date
                <strong>{movieState?.release_date}</strong>
              </span>
                            <span>
                Run Time
                <strong>{movieState?.runtime} mins</strong>
              </span>
                            <span>
                Genres
                <strong>
                  {movieState?.genres.map(({ name }) => name).join(", ")}
                </strong>
              </span>
                        </S.TechnicalDetails>
                    </div>
                </S.Details>
            </S.Main>
        </>
    );
}