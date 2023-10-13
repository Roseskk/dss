import React from 'react';
import Breadcrumbs from "../ui/breadcrumbs";

const Content: React.FC = () => {
    return(
        <div className={'service-content-container'}>
            <Breadcrumbs />
            <div className={'section-content-title-container'}>
                <h2>Услуги</h2>
                <p>Создание сайта или приложения, доработка, раскрутка, администрирование – команда DSSystem выполнит любой заказ.</p>
            </div>
        </div>
    )
}

export default Content;