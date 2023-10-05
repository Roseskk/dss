import React, {useState} from 'react';
import {useResize} from "../../hooks/useResize";

const Services: React.FC = () => {
    const {width} = useResize()
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const servicesItems = [
        {id: 1, counter: '01', title: 'Разработка сайтов', text: 'Разрабатываем любые сайты (от лендингов до интернет-магазинов под ключ) на современных CMS и фреймворках, таких как Laravel.'},
        {id: 2, counter: '02', title: 'Маркетинг', text: 'Продвигаем проекты, используем проверенные инструменты digital-маркетинга, оптимизируем сайты по канонам SEO.'},
        {id: 3, counter: '03', title: 'CRM-системы', text: 'Создаем и внедряем CRM-системы для автоматизации вашего бизнеса и повышения эффективности продаж. '},
        {id: 4, counter: '04', title: 'Доработка сайтов', text: 'Исправляем ошибки предыдущих разработчиков. Лишнее – убираем, нужное – добавляем.'},
        {id: 5, counter: '05', title: 'Дизайн', text: 'Создаем уникальный веб-дизайн сайта или приложения, учитывая айдентику компании. Разработаем эксклюзивный фирменный стиль для начинающих проектов.'},
        {id: 5, counter: '06', title: 'Администрирование', text: 'Отдаем проекты под контроль опытных администраторов, выполняем комплексное обслуживание сайта.'},
        {id: 5, counter: '07', title: 'Контент-менеджмент', text: 'Предлагаем услуги наполнения сайта контентом – уникальными текстами и медиа.'},
        {id: 5, counter: '08', title: 'Мобильная разработка', text: 'Разрабатываем функциональные кроссплатформенные приложения на QtC++.'},
    ]
    return(
        <section className={"service-section"}>
            <div className={"service-top"}>
                <h2>НАШИ <span>УСЛУГИ</span></h2>
                <hr />
            </div>
            {
                width <= 850
                ? <ul className={'service-mobile-list'}>
                        {servicesItems.map((item, index) => {
                            return(
                                <>
                                    <li className={'service-mobile'}
                                        onMouseEnter={() => setActiveIndex(index)}
                                        onMouseLeave={() => setActiveIndex(null)}
                                    >
                                        <div className={'service-mobile-tab'}>
                                            <div>
                                                <h3>{item.counter}</h3>
                                                <h2>{item.title}</h2>
                                            </div>
                                            <span>x</span>
                                        </div>
                                        <p  className={activeIndex === index ? 'visible' : ''}>{item.text}</p>
                                    </li>
                                    <hr className={'mobile-service__hr'} />
                                </>
                            )
                        })}
                    </ul>
                : <ul>
                        {servicesItems.map((item) => {
                            return(
                                <li>
                                    <div>
                                        <h3>{item.counter}</h3>
                                        <h2>{item.title}</h2>
                                        <p>{item.text}</p>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
            }
        </section>
    )
}

export default Services;