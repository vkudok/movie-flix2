import * as S from "./styles";
import React from "react";

export default function Video(props: { link: string }) {
    return (
        <S.CenterBlock>
            <S.Title>Trailer</S.Title>
            <iframe
                width="1000"
                height="600"
                src={props.link}
                title="Youtube Player"
                frameBorder="0"
                allowFullScreen
            />
        </S.CenterBlock>
    );
};
