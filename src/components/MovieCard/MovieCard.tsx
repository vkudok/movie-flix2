import * as S from "./styles";
import {MovieDataType} from "../../interfaces/interfaces";

export default function MovieCard(movieData: MovieDataType) {
    return (
        <>
            <S.Card>
                <img src={`https://image.tmdb.org/t/p/w500`+ movieData.poster_path} alt={movieData.original_title}/>
                <S.Title>{movieData.original_title}</S.Title>
            </S.Card>
        </>);
}