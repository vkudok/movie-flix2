import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {GlobalStyle} from "./styles/global";
import {Provider} from "react-redux";
import {store} from "./store";
import {
    QueryClient,
    QueryClientProvider,
} from 'react-query';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <QueryClientProvider client={queryClient}>
        <Provider store={store}>
            <BrowserRouter>
                <GlobalStyle/>
                <App/>
            </BrowserRouter>
        </Provider>
    </QueryClientProvider>
);


