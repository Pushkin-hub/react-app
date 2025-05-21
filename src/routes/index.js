import React, { useContext } from "react";
import {
    createBrowserRouter,
    Navigate,
    Outlit,
    useLocation,
} from 'react-router-dom';

import App from '../App';
import Writers from "../containers/Writers";


export const router = createBrowserRouter (
    [
        {
            path: '/',
            element: <App />,
            
        },
        {
            path: '/test',
            element: <Writers/>,
        }
        
    ]
)