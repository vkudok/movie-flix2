import * as S from "./styles"
import {useEffect, useState} from "react";
import api from "../../sevices/filmApi";
import Select, {SingleValue} from 'react-select';

export default function Genres() {
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
            `/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}`
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

    const changeStateByGenre = (e: SingleValue<{ label: string; value: number; }>) => {
        console.log(e);
    };

    return (
        <>
            <Select styles={S.customStyles} placeholder="Genre" options={genreState} onChange={changeStateByGenre}/>
        </>
    );
}
