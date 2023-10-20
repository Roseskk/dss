import React, {useEffect} from 'react';
import modalImage from '../../images/ui/modal.png'
import {useModalContext} from "../../hooks/useModalContext";

const Modal: React.FC = () => {
    const {isOpen, setOpen} = useModalContext()

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflowY = 'hidden';

        }
        return () => {
            document.body.style.overflowY = 'auto';
        };
    }, [isOpen]);

    return(
        <>
            <div className={`modal-container ${isOpen ? 'modal-visible' : 'modal-invisible'}`}>
                <button onClick={() =>  setOpen(false)} className={'modal-exit'}>Закрыть</button>
                <div className={'modal-left'}>
                    <img className={'modal-left-image'} src={modalImage} alt={'modal'} />
                </div>
                <form onSubmit={(e) => {e.preventDefault(); setOpen(false)}} className={'modal-right'}>
                    <h2 className={'modal-title'}>ОСТАВЬТЕ ЗАЯВКУ</h2>
                    <div className={'modal-right-sub'}>
                        <h3 className={'modal-sub'}>Запрлните свои контактные</h3>
                        <h3 className={'modal-sub'}>данные и мы вам перезвоним</h3>
                    </div>
                    <div className={'modal-input-container'}>
                        <div className="mui-input">
                            <input type="text" required placeholder={'Введите ваше имя'}/>
                        </div>
                        <div className="mui-input">
                            <input type="text" required placeholder={'Введите ваш телефон '}/>
                        </div>
                    </div>
                    <button className={'modal-btn'}>Отправить</button>
                    <div className={'modal-right-bot-text'}>
                        <p>Нажимая на кнопку «Отправить заявку», вы соглашаетесь на  обработку персональных данных в соответствии с <span>Политикой конфиденциальности</span>
                        </p>
                    </div>
                </form>
            </div>
            {
                 <div onClick={() => setOpen(false)} className={`modal-bg-screen ${isOpen && 'modal-bg-screen-visible'}`} />
            }
        </>
    )
}

export default Modal;