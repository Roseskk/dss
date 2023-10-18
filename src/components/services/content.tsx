import React from 'react';
import Breadcrumbs from "../ui/breadcrumbs";
import {useLocation} from "react-router-dom";
import useContent from "../../hooks/useContent";

const Content: React.FC = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter(x => x);

    const content = useContent(pathnames[pathnames.length - 1])

    return(
        <div className={'service-content-container'}>
            <Breadcrumbs />
            <div className={'section-content-title-container'}>
                <h2>{content?.title}</h2>
                <p>{content?.sub}</p>
            </div>
        </div>
    )
}

export default Content;