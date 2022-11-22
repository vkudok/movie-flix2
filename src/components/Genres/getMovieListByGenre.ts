import {SingleValue} from "react-select";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../store";
import {MovieType} from "../../common/types";


export default function getMovieListByGenre(e: SingleValue<{ label: string; value: number; }>, movieState: MovieType[]){
    let newMovieList: MovieType[] = [];
    if(e?.value !== 0){
        for (let item of movieState){
            for(let genre in item.genre_ids){
                if (item.genre_ids[genre] === e?.value){
                    newMovieList = [...newMovieList, item];
                }
            }
        }
    }
    else{
        newMovieList = movieState;
    }
    return newMovieList;
}