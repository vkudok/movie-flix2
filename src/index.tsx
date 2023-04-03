import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {GlobalStyle} from "./styles/global";
import {
    QueryClient,
    QueryClientProvider,
} from 'react-query';
import { Auth0Provider } from "@auth0/auth0-react";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <Auth0Provider
        domain="dev-42kn8rom72uazs0g.us.auth0.com"
        clientId="HgYqzVEXiAx273M0zbZFUlsG6B7qeHWn"
        authorizationParams={{
            redirect_uri: window.location.origin
        }}
    >
        <QueryClientProvider client={queryClient}>
                <BrowserRouter>
                    <GlobalStyle/>
                    <App/>
                </BrowserRouter>
        </QueryClientProvider>
    </Auth0Provider>,
);


