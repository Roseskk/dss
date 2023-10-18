import React from 'react';
import header_arrow from "../../images/head/header_arrow.svg";

interface IConsultation {
    background?: string
}
const Consultation: React.FC<IConsultation> = ({background}) => {
    return(
        <section className={'section-consultation'} style={{background: !!background ? background : ''}}>
            <h2 className={'consultation-title'}>ОСТАЛИСЬ ВОПРОСЫ ?</h2>
            <h2 className={'consultation-sub'}>ПОЛУЧИТЕ <span>КОНСУЛЬТАЦИЮ СПЕЦИАЛИСТА</span></h2>
            <form onSubmit={(e) => e.preventDefault()}>
                <div className="mui-input">
                    <input type="text" required placeholder={'Введите ваше имя *'}/>
                </div>
                <div className="mui-input">
                    <input type="text" required placeholder={'Введите номер вашего телефона *'}/>
                </div>
                <button>
                    <span>ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ </span>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="black" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.0469 2.32324C17.0469 1.49482 16.3753 0.823242 15.5469 0.823243L2.04688 0.823242C1.21845 0.823242 0.546875 1.49481 0.546875 2.32324C0.546875 3.15167 1.21845 3.82324 2.04688 3.82324H14.0469V15.8232C14.0469 16.6517 14.7184 17.3232 15.5469 17.3232C16.3753 17.3232 17.0469 16.6517 17.0469 15.8232L17.0469 2.32324ZM2.60754 17.3839L16.6075 3.3839L14.4862 1.26258L0.486215 15.2626L2.60754 17.3839Z" fill="black"/>
                    </svg>
                </button>
            </form>
        </section>
    )
}

export default Consultation;