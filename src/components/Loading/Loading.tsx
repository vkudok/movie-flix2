import {ClimbingBoxLoader} from "react-spinners";
import * as S from "./styles";

export default function Loading(props: {loading: boolean}){

    console.log('load' + props.loading);
    return(
        <S.Loading>
            <ClimbingBoxLoader
                size={15}
                color={"#ffffff"}
                loading={props.loading}
            />
        </S.Loading>
    );
}