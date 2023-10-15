import React from 'react';
import { useLocation, Link } from 'react-router-dom';

type PathNames = {
    [key: string]: string;
};

const pathNames: PathNames = {
    home: 'Главная',
    services: 'Услуги',
    create: 'Разработка'
}
function Breadcrumbs() {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter(x => x);

    return (
        <nav className={'breadcrumbs'} aria-label="breadcrumb">
            <ul>
                {pathnames.map((value, index) => {
                    const to = `/${pathnames.slice(0, index + 1).join('/')}`;

                    return (
                        <li key={index}>
                            <Link to={to}>{pathNames[value]}</Link> <span>&mdash;</span>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}

export default Breadcrumbs;
