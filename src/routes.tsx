import React from "react";
import Main from "./pages/main";
import Service from "./pages/service";

interface Route {
    path: string;
    element: React.ReactElement;
}

export const routes: Route[] = [
    {
        path: '/',
        element: <Main />
    },
    {
        path: '/services',
        element: <Service />
    }
];
