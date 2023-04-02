import {NavLink} from "react-router-dom";
import * as S from "./styles";
import {RecommendationInfoType} from "../../movies/api";
import MovieCardRequest from "../MovieCardRequest";
import React from "react";

export default function RecomList(props: {data: RecommendationInfoType}) {
    if(props.data) {
        return (
            <>
                <S.CenterBlock>
                    <S.Title>Recommended for You</S.Title>
                </S.CenterBlock>
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