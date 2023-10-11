import React from "react";
import {Navigate} from 'react-router-dom';
import Main from "./pages/main";
import Service from "./pages/service";

interface Route {
    path: string;
    element: React.ReactElement;
}

export const routes: Route[] = [
    {
        path: '/home',
        element: <Main />,

    },
    {
        path: '*',
        element: <Navigate to={'/home'} replace />

    },
    {
        path: '/services',
        element: <Service />
    }
];
