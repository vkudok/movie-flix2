import {NavLink} from "react-router-dom";
import {MovieBoxLogo} from "../../assets";
import * as S from "./styles";
import React from "react";
import AuthNav from "../AuthButton/AuthButton";

const Header = () => {
    return <header>
        <nav>
            <NavLink to={"/"}>
                <MovieBoxLogo/>
            </NavLink>
            <S.Link to="/favorites">Favorites</S.Link>
            <AuthNav/>
        </nav>
    </header>
};

export default Header;