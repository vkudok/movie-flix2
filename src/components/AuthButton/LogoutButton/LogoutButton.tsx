import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from '@mui/material/Button';

const LogoutButton = () => {
    const { logout } = useAuth0();

    return (
        <Button
            variant="outlined"
            style={{fontSize: '14px', fontWeight: '200', color: 'white'}}
            onClick={() => logout()}
        >
            Log out
        </Button>
    );
};

export default LogoutButton;