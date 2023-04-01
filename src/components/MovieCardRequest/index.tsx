import * as S from "./styles";
import {useQuery} from "react-query";
import {fetchMovie} from "../../movies/api";

export default function MovieCardRequest(props: { tmdbId: number }) {
    const tmdbId = props.tmdbId;
    const movieCard = useQuery(["movie", tmdbId], () =>
        fetchMovie(tmdbId)
    );
    if (movieCard.data) {
        return (
            <>
                <S.Card>
                    <img src={`https://image.tmdb.org/t/p/w500` + movieCard.data.poster_path}
                         alt={movieCard.data.original_title}/>
                    <S.Title>{movieCard.data.original_title}</S.Title>
                    <S.Vote>{movieCard.data.vote_average / 2}</S.Vote>
                </S.Card>
            </>);
    } else {
        return (<></>);
    }
}