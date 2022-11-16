import * as S from "./styles"
import {useEffect, useState} from "react";
import api from "../../sevices/filmApi";
import Select from "react-select/base";

export default function SelectGenre() {
    const [genreState, setGenreState] = useState(
        [
            {
                label: '',
                value: 0
            }
        ]
    );

    useEffect(() => {
        api.get(
            '/genre/movie/list?api_key=181911a338d5119b3964f38af18175e7&language=en-US'
        ).then((resp) => {
            let localGenreList = [];
            let data = resp.data.genres;
            localGenreList.push({
                label: "All",
                value: 0
            });
            for(const genre in data){
                localGenreList.push({
                    label: data[genre].name,
                    value: data[genre].id
                });
            }
            setGenreState(localGenreList);
        });
    }, [setGenreState]);

    // const changeStateByGenre = (e: SingleValue<{ label: string; value: number; }>) => {
    //     console.log(e);
    // };

    return (
        <>
            <Select></Select>
        </>
    );
}
