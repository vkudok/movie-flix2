import {useState} from "react";
import {MovieType} from "../../common/types";
import * as S from "./styles";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

export type MovieDataType = Omit<
    MovieType,
    "overview" | "release_date" | "runtime" | "genres"
    >;

export default function MovieCard(movieData: MovieDataType) {
    return (
        <>
            <S.Card>
                <img src={`https://image.tmdb.org/t/p/w500`+ movieData.poster_path} alt={movieData.original_title}/>
                <S.Title>{movieData.original_title}</S.Title>
                {/*<AiOutlineStar size={24} />*/}
                <S.Vote>{movieData.vote_average}</S.Vote>
            </S.Card>
        </>);
}