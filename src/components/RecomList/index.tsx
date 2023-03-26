import {NavLink} from "react-router-dom";
import * as S from "./styles";
import {RecommendationInfoType} from "../../movies/api";
import MovieCardRequest from "../MovieCardRequest";

export default function RecomList(props: {data: RecommendationInfoType}) {
    if(props.data) {
        return (
            <>
                <S.MovieList>
                    {
                        props.data.recommendation.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <NavLink to={"/movie/" + item.tmdbId}>
                                            <MovieCardRequest
                                                tmdbId={item.tmdbId}
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
    else {
        return (<></>);
    }
}