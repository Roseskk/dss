import React from 'react';
import {Link} from "react-router-dom";
import logo from "../../images/head/logo.svg"
import header_arrow from "../../images/head/header_arrow.svg"
import {useModalContext} from "../../hooks/useModalContext";

const Header: React.FC = (props) => {
    const {isOpen, setOpen} = useModalContext()
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
                <a onClick={() => setOpen(true)} className={"link_center"}>
                    <span className={"link"}>Оформить заявку</span>
                    <img src={header_arrow} alt={'arrow'} />
                </a>
            </nav>
        </header>
    )
}

export default Header;