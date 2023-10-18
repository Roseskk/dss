import React from 'react';
import Modal from "../components/ui/modal";
import Offers from "../components/services/offers";
import Seo from "../components/services/seo";
import Consultation from "../components/ui/consultation";
import {useLocation, Outlet} from "react-router-dom";

const Service: React.FC = () => {
    const location = useLocation();
    const pathSegments = location.pathname.split('/');

    // Находим индекс сегмента 'services'
    const servicesIndex = pathSegments.indexOf('services');

    const hasSegmentAfterServices = servicesIndex >= 0 && servicesIndex < pathSegments.length - 1;

    return(
        <>
            <Modal />
            <Offers />
            <Seo />
            <Consultation />
        </>
    )
}

export default Service;