import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import { GlobalStyle } from "./styles/global";
import {Provider} from "react-redux";
// import store from "./store/Store";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    // <Provider store={store}>
    // </Provider>

    <BrowserRouter>
        <GlobalStyle />
        <App/>
    </BrowserRouter>
);


