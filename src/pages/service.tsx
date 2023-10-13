import React from 'react';
import Modal from "../components/ui/modal";
import Offers from "../components/services/offers";
import Seo from "../components/services/seo";

const Service: React.FC = () => {
    return(
        <>
            <Modal />
            <Offers />
            <Seo />
        </>
    )
}

export default Service;