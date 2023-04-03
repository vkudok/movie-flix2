import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from '@mui/material/Button';

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();

    return (
        <Button onClick={() => loginWithRedirect()}
                variant="contained"
                style={{fontSize: '14px', fontWeight: '200', color: 'white'}}
        >
            Log In
        </Button>
    );
};

export default LoginButton;