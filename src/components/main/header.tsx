import React from 'react';
import {Link} from "react-router-dom";
import logo from "../../images/head/logo.svg"
import header_arrow from "../../images/head/header_arrow.svg"

const Header: React.FC = (props) => {
    return(
        <header>
            <nav className={"header"}>
                <Link to={'/'}><img src={logo} alt={"DSSYSTEM"}/></Link>
                <ul className={"header-list"}>
                    <li className={'header-list__item'}>Портфолио</li>
                    <li className={'header-list__item'}>Услуги</li>
                    <li className={'header-list__item'}>О нас</li>
                    <li className={'header-list__item'}>Блог</li>
                    <li className={'header-list__item'}>Контакты</li>
                </ul>
                <Link className={"link_center"} to={"#"}>
                    <span className={"link"}>Оформить заявку</span>
                    <img src={header_arrow} alt={'arrow'} />
                </Link>
            </nav>
        </header>
    )
}

export default Header;