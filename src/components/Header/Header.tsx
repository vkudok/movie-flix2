import {NavLink} from "react-router-dom";
import {MovieBoxLogo} from "../../assets";
import React from "react";
import AuthNav from "../AuthButton/AuthButton";

const Header = () => {
    return <header>
        <nav>
            <NavLink to={"/"}>
                <MovieBoxLogo/>
            </NavLink>
            <AuthNav/>
        </nav>
    </header>
};

export default Header;