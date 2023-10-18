import React from "react";
import {Navigate} from 'react-router-dom';
import Main from "./pages/main";
import Service from "./pages/service";
import Additional from "./pages/additional";
import MainLayout from "./layouts/mainLayout";
import ServiceLayout from "./layouts/servicesLayout";
import DetailServicesLayout from "./layouts/detailsServicesLayout";

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
        element: <MainLayout><Main /></MainLayout>,

    },
    {
      path: '/home/services/create',
      element:  <DetailServicesLayout><Additional /></DetailServicesLayout>
    },
    {
        path: '/home/services',
        element: <ServiceLayout><Service /></ServiceLayout>,
        // children: [
        //     {
        //         path: 'create',
        //         element: <DetailServicesLayout><Additional /></DetailServicesLayout>
        //     }
        // ]
    }
];
