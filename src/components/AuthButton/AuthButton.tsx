import React from 'react';
import {useAuth0} from "@auth0/auth0-react";
import LogoutButton from "./LogoutButton/LogoutButton";
import LoginButton from "./LoginButton/LoginButton";

const AuthNav = () => {
    const {isAuthenticated} = useAuth0();
    return (
        <>
        {isAuthenticated ? <LogoutButton/> : <LoginButton/>}
        </>
    )
};

export default AuthNav;