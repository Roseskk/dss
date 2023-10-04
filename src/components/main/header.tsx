import React from 'react';
import {Link} from "react-router-dom";
import logo from "../../images/head/logo.svg"
import header_arrow from "../../images/head/header_arrow.svg"

const Header: React.FC = (props) => {
    return(
        <header>
            <nav className={"header"}>
                <img src={logo} alt={"DSSYSTEM"}/>
                <ul className={"header-list"}>
                    <li>Портфолио</li>
                    <li>Услуги</li>
                    <li>О нас</li>
                    <li>Блог</li>
                    <li>Контакты</li>
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