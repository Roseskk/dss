import React from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from "framer-motion";
import Main from "./pages/main";
import Service from './pages/service';
import Additional from './pages/additional';
import MainLayout from "./layouts/mainLayout";
import ServiceLayout from "./layouts/servicesLayout";
import DetailServicesLayout from "./layouts/detailsServicesLayout";
const AppRoutes: React.FC = () => {
    const location = useLocation();
    return (
        <AnimatePresence mode={'wait'}>
            <Routes location={location} key={location.pathname}>
                <Route path="/home" element={<MainLayout><Main /></MainLayout>} />
                <Route path="/home/services" element={<ServiceLayout><Service /></ServiceLayout>} />
                <Route path="/home/services/create" element={<DetailServicesLayout><Additional /></DetailServicesLayout>} />
                <Route path="/home/services/crm" element={<DetailServicesLayout><Additional /></DetailServicesLayout>} />
                <Route path="/home/services/marketing" element={<DetailServicesLayout><Additional /></DetailServicesLayout>} />
                <Route path="/home/services/additional" element={<DetailServicesLayout><Additional /></DetailServicesLayout>} />
                <Route path="/home/services/design" element={<DetailServicesLayout><Additional /></DetailServicesLayout>} />
                <Route path="/home/services/administration" element={<DetailServicesLayout><Additional /></DetailServicesLayout>} />
                <Route path="/home/services/mobile" element={<DetailServicesLayout><Additional /></DetailServicesLayout>} />
                <Route path="/home/services/manage" element={<DetailServicesLayout><Additional /></DetailServicesLayout>} />
                <Route path="*" element={<Navigate to="/home" replace />} />
            </Routes>
        </AnimatePresence>
    );
};


export default AppRoutes;
