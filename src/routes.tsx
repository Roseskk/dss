import React from "react";
import Main from "./pages/main";

interface Route {
    path: string;
    element: React.ReactElement;
}

export const routes: Route[] = [
    {
        path: '/',
        element: <Main />
    }
];
