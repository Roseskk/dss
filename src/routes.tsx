import React from "react";
import {Navigate} from 'react-router-dom';
import Main from "./pages/main";
import Service from "./pages/service";
import Additional from "./pages/additional";

interface Route {
    path: string;
    element: React.ReactElement;
    children?: Route[]
}

export const routes: Route[] = [
    {
        path: '*',
        element: <Navigate to={'/home'} replace />
    },
    {
        path: '/home',
        element: <Main />,

    },
    {
        path: '/home/services',
        element: <Service />,
        children: [
            {
                path: 'create',
                element: <Additional />
            }
        ]
    }
];
