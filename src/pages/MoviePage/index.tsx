import * as S from "./styles";
import {useLocation} from "react-router-dom"
import {useMutation, useQuery} from "react-query";
import {AiFillStar} from "react-icons/ai";
import {
    fetchMovie, fetchMovieVideo,
    findMovieIdByTmdbId, GeneralMoviePageInfo,
    getRecommendation, getUserRating,
    MovieInfo,
    MovieRating,
    setRating
} from "../../movies/api";
import RecomList from "../../components/RecomList";
import React, {useState} from "react";
import Rating from '@mui/material/Rating';
import Header from "../../components/Header";
import {useAuth0} from "@auth0/auth0-react";
import {StyledTooltip} from "./muiStyles";
import Video from "../../components/Video/Video";

export default function MoviePage() {
    const href = useLocation();
    const movieId = href.pathname.split('/')[2];
    const tmdbId = parseInt(movieId);
    const valueNumber = 4;
    const recommendationResult = useQuery(["recommendation", tmdbId, valueNumber],() =>
        getRecommendation(tmdbId, valueNumber)
    );
    const endpointMovieCard = `movie/${movieId}`;
    const endpointMovieVideo = `/movie/${movieId}/videos`;
    const movieCardResult = useQuery(["movieCard", endpointMovieCard], () =>
        fetchMovie(endpointMovieCard)
    );
    const movieVideoResult = useQuery(["movieVideo", endpointMovieVideo], () =>
        fetchMovieVideo(endpointMovieVideo)
    );
    let youtubeLink = '';
    if(movieVideoResult.data && movieVideoResult.data?.results){
        movieVideoResult.data?.results.forEach(item=>{
            if(item.type === 'Trailer'){
                youtubeLink = `https://www.youtube.com/embed/${item.key}?showinfo=0`;
            }
        });
    }
    let movieInfo: MovieInfo | undefined;
    if (movieCardResult.data) {
        let genreList = '';
        movieCardResult.data.genres.forEach((item, index) => {
            let delimeter = '|';
            if (index === movieCardResult.data.genres.length - 1) {
                delimeter = '';
            }
            genreList = genreList + item.name + delimeter;
        });
        movieInfo = {
            movieInfo: [
                {
                    name: movieCardResult.data.original_title,
                    genre: genreList,
                    tmdbId: movieCardResult.data.id
                }
            ]
        }
    }
    const movieLensListResult = useQuery(["movieInfo", movieInfo], () =>
            findMovieIdByTmdbId(movieInfo),
        {enabled: !!movieInfo}
    );
    const { user, isAuthenticated } = useAuth0();
    let userId: string[] = [];
    if(user){
        userId = user!.sub!.split('|');
    }
    const [value, setValue] = useState<number>(0);
    let moviePageInfo: GeneralMoviePageInfo | undefined;
    if(movieLensListResult.data && userId.length){
        moviePageInfo = {
            userId: userId[1],
            movieId: movieLensListResult.data[0]
        }
    }
    const userRatingResult = useQuery(["userRating", moviePageInfo],() =>
            getUserRating(moviePageInfo),
        {
            enabled: !!moviePageInfo,
            onSuccess(data){
                if(data){
                    setValue(data);
                }
            }
        }
    );
    const movieRatingResult = useMutation("movieRating", (movieRating: MovieRating) =>
        setRating(movieRating)
    );

    if (movieCardResult.status === "success" && movieCardResult.data) {
        return (
            <>
                <Header></Header>
                <S.Main>
                    <S.Details>
                        <S.MoviePoster
                            src={`https://image.tmdb.org/t/p/w500${movieCardResult.data?.poster_path}`}
                            alt={movieCardResult.data?.original_title}
                        />
                        <div>
                            <h4>{movieCardResult.data?.original_title}</h4>
                            <p>{movieCardResult.data?.overview}</p>
                            <S.Rate>
                                <AiFillStar size={24}/>
                                <span>{movieCardResult.data?.vote_average / 2}</span>
                            </S.Rate>
                            {movieLensListResult.data &&
                                <S.Stars>
                                    <StyledTooltip title={isAuthenticated ? 'Rate the movie' : 'Log in to rate movie'} placement="bottom">
                                         <span>
                                            <Rating
                                                value={value}
                                                disabled={!isAuthenticated && (!userId.length) && (!userRatingResult)}
                                                onChange={(event, newValue) => {
                                                    if (newValue === null) {
                                                        newValue = 0;
                                                    }
                                                    setValue(newValue);
                                                    movieRatingResult.mutateAsync({
                                                        userId: userId[1],
                                                        movieId: movieLensListResult.data[0],
                                                        rating: newValue,
                                                        timestamp: Date.now().toString()
                                                    })
                                                }}
                                                size="large"
                                            />
                                         </span>
                                    </StyledTooltip>
                                </S.Stars>
                            }
                            <S.TechnicalDetails>
                                  <span>
                                    Type
                                    <strong>Movie</strong>
                                  </span>
                                                    <span>
                                    Release Date
                                    <strong>{movieCardResult.data?.release_date}</strong>
                                  </span>
                                                    <span>
                                    Run Time
                                    <strong>{movieCardResult.data?.runtime} mins</strong>
                                  </span>
                                                    <span>
                                    Genres
                                    <strong>
                                      {movieCardResult.data?.genres.map(({name}) => name).join(", ")}
                                    </strong>
                                  </span>
                            </S.TechnicalDetails>
                        </div>
                    </S.Details>
                </S.Main>
                {youtubeLink !== '' &&
                    <Video link={youtubeLink}></Video>
                }
                {recommendationResult.data && <RecomList data={recommendationResult.data}></RecomList>}
            </>
        );
    }
    return null;
}