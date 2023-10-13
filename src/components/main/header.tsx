import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import logo from "../../images/head/logo.svg"
import header_arrow from "../../images/head/header_arrow.svg"
import {useModalContext} from "../../hooks/useModalContext";
import {useHeaderScrollContext} from "../../hooks/useHeaderScrollContext";

const Header: React.FC = () => {
    const [headerClass, setHeaderClass] = useState<string>('header-container')
    const {isOpen, setOpen} = useModalContext()
    const {inView} = useHeaderScrollContext()

    useEffect(() => {
        if (inView) {
            console.log(inView)
        }
    },[inView])

    return(
        <header className={`${inView ?  'header-container' : 'header-container-inView'}`}>
            <nav className={"header"}>
                <Link to={'/'}><img src={logo} alt={"DSSYSTEM"}/></Link>
                <ul className={"header-list"}>
                    <li className={'header-list__item'}>Портфолио</li>
                    <li className={'header-list__item'}><Link to={'home/services'}>Услуги</Link></li>
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