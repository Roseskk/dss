import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import logo from "../../images/head/logo.svg"
import header_arrow from "../../images/head/header_arrow.svg"
import {useModalContext} from "../../hooks/useModalContext";
import {useHeaderScrollContext} from "../../hooks/useHeaderScrollContext";
import {useResize} from "../../hooks/useResize";
import MobileMenu from "../ui/mobileMenu";
import {useMobileMenuContext} from "../../hooks/useMobileMenuContext";

const Header: React.FC = () => {
    const [headerClass, setHeaderClass] = useState<string>('header-container')
    const {isOpen, setOpen} = useModalContext()
    const {inView} = useHeaderScrollContext()
    const {width} = useResize()

    const {isOpenMobile, setOpenMobile} = useMobileMenuContext()

    useEffect(() => {
        if (inView) {
            console.log(inView)
        }
    },[inView])

    return(
        <header className={`${inView ?  'header-container' : 'header-container-inView'}`}>
            <nav className={"header"}>
                <Link to={'/'}><img src={logo} alt={"DSSYSTEM"}/></Link>
                {
                    width <= 766
                    ? <div className={'header-hamburger'}>
                            <svg onClick={() => setOpenMobile(!isOpenMobile)} className={`burger ${isOpenMobile ? 'open' : ''}`} width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23 2H1C0.447998 2 0 1.552 0 1C0 0.447998 0.447998 0 1 0H23C23.552 0 24 0.447998 24 1C24 1.552 23.552 2 23 2Z" fill="white"/>
                                <path d="M23.2666 9.6665H7.13324C6.72843 9.6665 6.3999 9.21851 6.3999 8.6665C6.3999 8.1145 6.72843 7.6665 7.13324 7.6665H23.2666C23.6714 7.6665 23.9999 8.1145 23.9999 8.6665C23.9999 9.21851 23.6714 9.6665 23.2666 9.6665Z" fill="white"/>
                                <path d="M23.5578 17.3333H13.8416C13.5978 17.3333 13.3999 16.8853 13.3999 16.3333C13.3999 15.7813 13.5978 15.3333 13.8416 15.3333H23.5578C23.8016 15.3333 23.9995 15.7813 23.9995 16.3333C23.9995 16.8853 23.8016 17.3333 23.5578 17.3333Z" fill="white"/>
                            </svg>

                            <MobileMenu />
                        </div>
                    : <>
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
                        </>
                }
            </nav>
        </header>
    )
}

export default Header;