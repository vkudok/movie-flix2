import * as S from "./styles";
import Select, {SingleValue} from 'react-select';
import {useEffect, useState} from "react";
import api from "../../sevices/filmApi";

export default function SelectGenre() {
    const changeStateByGenre = (e: SingleValue<{ label: string; value: number; }>) => {
        console.log(e);
    };

    return (
        <>
            <Select styles={S.customStyles} placeholder="Genre" options={genreState} onChange={changeStateByGenre}/>
        </>
    );
}
