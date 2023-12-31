import React from 'react';
import {Link} from "react-router-dom";
import logo from "../../images/head/logo.svg";
import header_arrow from "../../images/head/header_arrow.svg";
import {useResize} from "../../hooks/useResize";
import {useModalContext} from "../../hooks/useModalContext";

const Footer: React.FC = () => {
    const {width} = useResize()
    const {setOpen} = useModalContext()
    return(
        <footer className={'footer'}>
            {
                width <=767
                ? <>
                    <div className={'footer-mobile'}>
                        <img className={'logo'} src={logo} alt={'logo'}/>
                        <div className={'footer-mobile-contacts'}>
                            <span className={'phone'}>+8 (123) 456-78-90</span>
                            <span className={'email'}>info@dssystem.ru</span>
                        </div>
                        <div className={'footer-contacts-phone-call'}>
                            <span>ЗАКАЗАТЬ ЗВОНОК <img src={header_arrow} alt={'arrow'} /></span>
                        </div>
                        <div className={'section-contacts-icon'}>
                            <Link to={'#'}>
                                <svg width="36" height="36" viewBox="0 0 36 36" fill="white" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_9_82)">
                                        <path d="M21.1358 17.7399C21.1358 19.6152 19.6156 21.1354 17.7403 21.1354C15.8649 21.1354 14.3447 19.6152 14.3447 17.7399C14.3447 15.8646 15.8649 14.3444 17.7403 14.3444C19.6156 14.3444 21.1358 15.8646 21.1358 17.7399Z" fill="white"/>
                                        <path d="M25.6819 11.7328C25.5187 11.2905 25.2583 10.8901 24.92 10.5615C24.5913 10.2231 24.1913 9.96273 23.7487 9.7995C23.3897 9.66009 22.8505 9.49416 21.8574 9.44896C20.783 9.39996 20.4609 9.3894 17.741 9.3894C15.0208 9.3894 14.6987 9.39969 13.6246 9.44869C12.6314 9.49416 12.0919 9.66009 11.7333 9.7995C11.2907 9.96273 10.8904 10.2231 10.562 10.5615C10.2236 10.8901 9.96324 11.2902 9.79974 11.7328C9.66034 12.0917 9.49441 12.6312 9.4492 13.6244C9.40021 14.6984 9.38965 15.0206 9.38965 17.7407C9.38965 20.4606 9.40021 20.7828 9.4492 21.8571C9.49441 22.8503 9.66034 23.3895 9.79974 23.7484C9.96324 24.191 10.2234 24.5911 10.5617 24.9197C10.8904 25.2581 11.2904 25.5185 11.733 25.6817C12.0919 25.8214 12.6314 25.9873 13.6246 26.0325C14.6987 26.0815 15.0205 26.0918 17.7407 26.0918C20.4611 26.0918 20.7833 26.0815 21.8571 26.0325C22.8503 25.9873 23.3897 25.8214 23.7487 25.6817C24.6371 25.339 25.3393 24.6368 25.6819 23.7484C25.8214 23.3895 25.9873 22.8503 26.0328 21.8571C26.0818 20.7828 26.092 20.4606 26.092 17.7407C26.092 15.0206 26.0818 14.6984 26.0328 13.6244C25.9876 12.6312 25.8216 12.0917 25.6819 11.7328ZM17.741 22.9713C14.8519 22.9713 12.5099 20.6295 12.5099 17.7405C12.5099 14.8514 14.8519 12.5096 17.741 12.5096C20.6298 12.5096 22.9718 14.8514 22.9718 17.7405C22.9718 20.6295 20.6298 22.9713 17.741 22.9713ZM23.1786 13.5253C22.5035 13.5253 21.9562 12.9779 21.9562 12.3028C21.9562 11.6277 22.5035 11.0804 23.1786 11.0804C23.8537 11.0804 24.401 11.6277 24.401 12.3028C24.4008 12.9779 23.8537 13.5253 23.1786 13.5253Z" fill="white"/>
                                        <path d="M17.7399 0C7.94394 0 0 7.94394 0 17.7399C0 27.5359 7.94394 35.4799 17.7399 35.4799C27.5359 35.4799 35.4799 27.5359 35.4799 17.7399C35.4799 7.94394 27.5359 0 17.7399 0ZM27.8651 21.9397C27.8158 23.0241 27.6434 23.7644 27.3917 24.4125C26.8625 25.7808 25.7808 26.8625 24.4125 27.3917C23.7647 27.6434 23.0241 27.8156 21.94 27.8651C20.8537 27.9146 20.5067 27.9266 17.7402 27.9266C14.9735 27.9266 14.6267 27.9146 13.5402 27.8651C12.4561 27.8156 11.7155 27.6434 11.0677 27.3917C10.3877 27.1359 9.77218 26.735 9.26328 26.2166C8.74518 25.708 8.34429 25.0922 8.08849 24.4125C7.83675 23.7647 7.66432 23.0241 7.61505 21.94C7.56498 20.8534 7.55334 20.5064 7.55334 17.7399C7.55334 14.9735 7.56498 14.6265 7.61478 13.5402C7.66405 12.4558 7.83621 11.7155 8.08795 11.0674C8.34375 10.3877 8.74491 9.77191 9.26328 9.26328C9.77191 8.74491 10.3877 8.34402 11.0674 8.08822C11.7155 7.83648 12.4558 7.66432 13.5402 7.61478C14.6265 7.56525 14.9735 7.55334 17.7399 7.55334C20.5064 7.55334 20.8534 7.56525 21.9397 7.61505C23.0241 7.66432 23.7644 7.83648 24.4125 8.08795C25.0922 8.34375 25.708 8.74491 26.2169 9.26328C26.735 9.77218 27.1361 10.3877 27.3917 11.0674C27.6437 11.7155 27.8158 12.4558 27.8654 13.5402C27.9149 14.6265 27.9266 14.9735 27.9266 17.7399C27.9266 20.5064 27.9149 20.8534 27.8651 21.9397Z" fill="white"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_9_82">
                                            <rect width="35.4799" height="35.4799" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </Link>
                            <Link to={'#'}>
                                <svg width="37" height="36" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.5799 0.0718994C8.78244 0.0718994 0.839844 8.01449 0.839844 17.812C0.839844 26.5991 7.23548 33.8764 15.6212 35.2856V21.513H11.3418V16.5568H15.6212V12.9023C15.6212 8.66206 18.211 6.35136 21.9942 6.35136C23.8061 6.35136 25.3632 6.48637 25.8152 6.54584V10.978L23.1913 10.9793C21.1344 10.9793 20.7378 11.9566 20.7378 13.3912V16.5543H25.6459L25.0058 21.5105H20.7378V35.4041C29.515 34.3358 36.3197 26.8732 36.3197 17.8069C36.3197 8.01449 28.3771 0.0718994 18.5799 0.0718994Z" fill="white"/>
                                </svg>
                            </Link>
                            <Link to={'#'}>
                                <svg width="37" height="36" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_9_79)">
                                        <path d="M16.21 21.0632L21.9805 17.7397L16.21 14.4161V21.0632Z" fill="white"/>
                                        <path d="M18.4196 0C8.62363 0 0.679688 7.94394 0.679688 17.7399C0.679688 27.5359 8.62363 35.4799 18.4196 35.4799C28.2156 35.4799 36.1596 27.5359 36.1596 17.7399C36.1596 7.94394 28.2156 0 18.4196 0ZM29.5044 17.7581C29.5044 17.7581 29.5044 21.3558 29.048 23.0907C28.7922 24.0403 28.0435 24.789 27.0939 25.0445C25.359 25.5012 18.4196 25.5012 18.4196 25.5012C18.4196 25.5012 11.4984 25.5012 9.74537 25.0264C8.79579 24.7708 8.04706 24.0218 7.79126 23.0723C7.3346 21.3558 7.3346 17.7399 7.3346 17.7399C7.3346 17.7399 7.3346 14.1425 7.79126 12.4076C8.04679 11.458 8.81392 10.6909 9.74537 10.4354C11.4802 9.97872 18.4196 9.97872 18.4196 9.97872C18.4196 9.97872 25.359 9.97872 27.0939 10.4535C28.0435 10.709 28.7922 11.458 29.048 12.4076C29.5228 14.1425 29.5044 17.7581 29.5044 17.7581Z" fill="white"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_9_79">
                                            <rect x="0.679688" width="35.4799" height="35.4799" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </Link>
                        </div>
                        <ul className={"footer-list"}>
                            <li className={'footer-list__item'}>Портфолио</li>
                            <li className={'footer-list__item'}>Услуги</li>
                            <li className={'footer-list__item'}>О нас</li>
                            <li className={'footer-list__item'}>Блог</li>
                            <li className={'footer-list__item'}>Контакты</li>
                        </ul>
                        <div className={'footer-mobile-bottom'}>
                            <span>Политика конфиденциальности</span>
                            <span>2020 — Все права защищены</span>
                        </div>
                    </div>
                    </>
                : <>
                        <nav className={"header"}>
                            <Link to={'/'}><img src={logo} alt={"DSSYSTEM"}/></Link>
                            <ul className={"header-list"}>
                                <li className={'header-list__item'}>Портфолио</li>
                                <li className={'header-list__item'}>Услуги</li>
                                <li className={'header-list__item'}>О нас</li>
                                <li className={'header-list__item'}>Блог</li>
                                <li className={'header-list__item'}>Контакты</li>
                            </ul>
                            <button onClick={() => setOpen(true)} className={"link_center"}>
                                <span className={"link"}>Оформить заявку</span>
                                <img src={header_arrow} alt={'arrow'} />
                            </button>
                        </nav>
                        <div className={'footer-bot'}>
                            <div className={'section-contacts-icon'}>
                                <Link to={'#'}>
                                    <svg width="36" height="36" viewBox="0 0 36 36" fill="white" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_9_82)">
                                            <path d="M21.1358 17.7399C21.1358 19.6152 19.6156 21.1354 17.7403 21.1354C15.8649 21.1354 14.3447 19.6152 14.3447 17.7399C14.3447 15.8646 15.8649 14.3444 17.7403 14.3444C19.6156 14.3444 21.1358 15.8646 21.1358 17.7399Z" fill="white"/>
                                            <path d="M25.6819 11.7328C25.5187 11.2905 25.2583 10.8901 24.92 10.5615C24.5913 10.2231 24.1913 9.96273 23.7487 9.7995C23.3897 9.66009 22.8505 9.49416 21.8574 9.44896C20.783 9.39996 20.4609 9.3894 17.741 9.3894C15.0208 9.3894 14.6987 9.39969 13.6246 9.44869C12.6314 9.49416 12.0919 9.66009 11.7333 9.7995C11.2907 9.96273 10.8904 10.2231 10.562 10.5615C10.2236 10.8901 9.96324 11.2902 9.79974 11.7328C9.66034 12.0917 9.49441 12.6312 9.4492 13.6244C9.40021 14.6984 9.38965 15.0206 9.38965 17.7407C9.38965 20.4606 9.40021 20.7828 9.4492 21.8571C9.49441 22.8503 9.66034 23.3895 9.79974 23.7484C9.96324 24.191 10.2234 24.5911 10.5617 24.9197C10.8904 25.2581 11.2904 25.5185 11.733 25.6817C12.0919 25.8214 12.6314 25.9873 13.6246 26.0325C14.6987 26.0815 15.0205 26.0918 17.7407 26.0918C20.4611 26.0918 20.7833 26.0815 21.8571 26.0325C22.8503 25.9873 23.3897 25.8214 23.7487 25.6817C24.6371 25.339 25.3393 24.6368 25.6819 23.7484C25.8214 23.3895 25.9873 22.8503 26.0328 21.8571C26.0818 20.7828 26.092 20.4606 26.092 17.7407C26.092 15.0206 26.0818 14.6984 26.0328 13.6244C25.9876 12.6312 25.8216 12.0917 25.6819 11.7328ZM17.741 22.9713C14.8519 22.9713 12.5099 20.6295 12.5099 17.7405C12.5099 14.8514 14.8519 12.5096 17.741 12.5096C20.6298 12.5096 22.9718 14.8514 22.9718 17.7405C22.9718 20.6295 20.6298 22.9713 17.741 22.9713ZM23.1786 13.5253C22.5035 13.5253 21.9562 12.9779 21.9562 12.3028C21.9562 11.6277 22.5035 11.0804 23.1786 11.0804C23.8537 11.0804 24.401 11.6277 24.401 12.3028C24.4008 12.9779 23.8537 13.5253 23.1786 13.5253Z" fill="white"/>
                                            <path d="M17.7399 0C7.94394 0 0 7.94394 0 17.7399C0 27.5359 7.94394 35.4799 17.7399 35.4799C27.5359 35.4799 35.4799 27.5359 35.4799 17.7399C35.4799 7.94394 27.5359 0 17.7399 0ZM27.8651 21.9397C27.8158 23.0241 27.6434 23.7644 27.3917 24.4125C26.8625 25.7808 25.7808 26.8625 24.4125 27.3917C23.7647 27.6434 23.0241 27.8156 21.94 27.8651C20.8537 27.9146 20.5067 27.9266 17.7402 27.9266C14.9735 27.9266 14.6267 27.9146 13.5402 27.8651C12.4561 27.8156 11.7155 27.6434 11.0677 27.3917C10.3877 27.1359 9.77218 26.735 9.26328 26.2166C8.74518 25.708 8.34429 25.0922 8.08849 24.4125C7.83675 23.7647 7.66432 23.0241 7.61505 21.94C7.56498 20.8534 7.55334 20.5064 7.55334 17.7399C7.55334 14.9735 7.56498 14.6265 7.61478 13.5402C7.66405 12.4558 7.83621 11.7155 8.08795 11.0674C8.34375 10.3877 8.74491 9.77191 9.26328 9.26328C9.77191 8.74491 10.3877 8.34402 11.0674 8.08822C11.7155 7.83648 12.4558 7.66432 13.5402 7.61478C14.6265 7.56525 14.9735 7.55334 17.7399 7.55334C20.5064 7.55334 20.8534 7.56525 21.9397 7.61505C23.0241 7.66432 23.7644 7.83648 24.4125 8.08795C25.0922 8.34375 25.708 8.74491 26.2169 9.26328C26.735 9.77218 27.1361 10.3877 27.3917 11.0674C27.6437 11.7155 27.8158 12.4558 27.8654 13.5402C27.9149 14.6265 27.9266 14.9735 27.9266 17.7399C27.9266 20.5064 27.9149 20.8534 27.8651 21.9397Z" fill="white"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_9_82">
                                                <rect width="35.4799" height="35.4799" fill="white"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </Link>
                                <Link to={'#'}>
                                    <svg width="37" height="36" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18.5799 0.0718994C8.78244 0.0718994 0.839844 8.01449 0.839844 17.812C0.839844 26.5991 7.23548 33.8764 15.6212 35.2856V21.513H11.3418V16.5568H15.6212V12.9023C15.6212 8.66206 18.211 6.35136 21.9942 6.35136C23.8061 6.35136 25.3632 6.48637 25.8152 6.54584V10.978L23.1913 10.9793C21.1344 10.9793 20.7378 11.9566 20.7378 13.3912V16.5543H25.6459L25.0058 21.5105H20.7378V35.4041C29.515 34.3358 36.3197 26.8732 36.3197 17.8069C36.3197 8.01449 28.3771 0.0718994 18.5799 0.0718994Z" fill="white"/>
                                    </svg>
                                </Link>
                                <Link to={'#'}>
                                    <svg width="37" height="36" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_9_79)">
                                            <path d="M16.21 21.0632L21.9805 17.7397L16.21 14.4161V21.0632Z" fill="white"/>
                                            <path d="M18.4196 0C8.62363 0 0.679688 7.94394 0.679688 17.7399C0.679688 27.5359 8.62363 35.4799 18.4196 35.4799C28.2156 35.4799 36.1596 27.5359 36.1596 17.7399C36.1596 7.94394 28.2156 0 18.4196 0ZM29.5044 17.7581C29.5044 17.7581 29.5044 21.3558 29.048 23.0907C28.7922 24.0403 28.0435 24.789 27.0939 25.0445C25.359 25.5012 18.4196 25.5012 18.4196 25.5012C18.4196 25.5012 11.4984 25.5012 9.74537 25.0264C8.79579 24.7708 8.04706 24.0218 7.79126 23.0723C7.3346 21.3558 7.3346 17.7399 7.3346 17.7399C7.3346 17.7399 7.3346 14.1425 7.79126 12.4076C8.04679 11.458 8.81392 10.6909 9.74537 10.4354C11.4802 9.97872 18.4196 9.97872 18.4196 9.97872C18.4196 9.97872 25.359 9.97872 27.0939 10.4535C28.0435 10.709 28.7922 11.458 29.048 12.4076C29.5228 14.1425 29.5044 17.7581 29.5044 17.7581Z" fill="white"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_9_79">
                                                <rect x="0.679688" width="35.4799" height="35.4799" fill="white"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </Link>
                            </div>
                            <span className={'footer-bot-text'}>2020 — Все права защищены</span>
                            <span className={'footer-bot-text'}>Политика конфиденциальности</span>

                        </div>
                    </>
            }
        </footer>
    )
}

export default Footer;