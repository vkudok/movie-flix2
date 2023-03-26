import * as S from "./styles";
import {MovieBoxLogo} from "../../assets";
import {NavLink, useLocation} from "react-router-dom"
import {useQuery} from "react-query";
import {AiFillStar} from "react-icons/ai";
import {fetchMovie, findMovieIdByTmdbId, getRecommendation, MovieInfo} from "../../movies/api";
import RecomList from "../../components/RecomList";

export default function MoviePage() {

    const href = useLocation();
    const movieId = href.pathname.split('/')[2];

    const movieCard = useQuery(["movie", movieId], () =>
        fetchMovie(Number(movieId))
    );

    let movieInfo: MovieInfo | undefined;
    if (movieCard.data) {
        let genreList = '';
        movieCard.data.genres.forEach((item, index) => {
            let delimeter = '|';
            if (index === movieCard.data.genres.length - 1) {
                delimeter = '';
            }
            genreList = genreList + item.name + delimeter;
        });
        movieInfo = {
            movieInfo: [
                {
                    name: movieCard.data.original_title,
                    genre: genreList,
                    tmdbId: movieCard.data.id
                }
            ]
        }
    }
    const movieLensList = useQuery(["movieInfo", movieInfo], () =>
        findMovieIdByTmdbId(movieInfo), {enabled: !!movieInfo}
    );

    const tmdbId = parseInt(movieId);
    const valueNumber = 4;

    const recommendation = useQuery(
        ["recommendation", tmdbId, valueNumber],
        () => getRecommendation(tmdbId, valueNumber),
        {
            enabled: !!movieLensList
        }
    );

    if (movieCard.status === "success" && movieCard.data) {
        return (
            <>

                <header>
                    <nav>
                        <NavLink to={"/"}>
                            <MovieBoxLogo/>
                        </NavLink>
                    </nav>
                </header>
                <S.Main>
                    <S.Details>
                        <S.MoviePoster
                            src={`https://image.tmdb.org/t/p/w500${movieCard.data?.poster_path}`}
                            alt={movieCard.data?.original_title}
                        />
                        <div>
                            <h4>{movieCard.data?.original_title}</h4>
                            <p>{movieCard.data?.overview}</p>
                            <S.Rate>
                                <AiFillStar size={24}/>
                                <span>{movieCard.data?.vote_average}</span>
                            </S.Rate>
                            <S.TechnicalDetails>
                                  <span>
                                    Type
                                    <strong>Movie</strong>
                                  </span>
                                                    <span>
                                    Release Date
                                    <strong>{movieCard.data?.release_date}</strong>
                                  </span>
                                                    <span>
                                    Run Time
                                    <strong>{movieCard.data?.runtime} mins</strong>
                                  </span>
                                                    <span>
                                    Genres
                                    <strong>
                                      {movieCard.data?.genres.map(({name}) => name).join(", ")}
                                    </strong>
                                  </span>
                            </S.TechnicalDetails>
                        </div>
                    </S.Details>
                </S.Main>
                <h4>Вам должно понравиться:</h4>
                {recommendation.data && <RecomList data={recommendation.data}></RecomList>}
            </>
        );
    }
    return null;
}