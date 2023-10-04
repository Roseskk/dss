import React from 'react';
import computer from '../../images/main/computer.png'

const About: React.FC = () => {
    return(
        <section className={"about"}>
            <div className={"about-left"}>
                <span className={"about-title"}>Мы — команда с богатым опытом разработки <span>сложных digital-решений</span></span>
                <p className={"about-p"}>Над выполнением поставленной задачи будут работать опытные специалисты – разработчики, маркетологи, администраторы, дизайнеры. Мы применяем лучший набор инструментов и в итоге получаем качественный результат. Именно поэтому в портфолио DSSystem – только успешно завершенные проекты, которые приносят прибыль своим владельцам.
                </p>
                <div className={'about-card'}>
                    <ul>
                        <li>
                            <h3>01</h3>
                            <span className={"about-card-subtitle"}>Комплексная веб-разработка</span>
                            <span>Сочетаем функциональность и качественное визуальное оформление.</span>
                        </li>
                        <li>
                            <h3>02</h3>
                            <span className={"about-card-subtitle"}>Поддержка и развитие </span>
                            <span>Активно коммуницируем с клиентами, предоставляем гарантию и поддерживаем после окончания работ.</span>
                        </li>
                        <li>
                            <h3>03</h3>
                            <span className={"about-card-subtitle"}>Эффективное продвижение</span>
                            <span>Выводим проекты в топ поисковиков и в лидеры среди конкурентов.</span>
                        </li>
                        <li>
                            <h3>04</h3>
                            <span className={"about-card-subtitle"}>Разработка приложений для мобильных устройств</span>
                            <span>Создаем удобные приложения для любых платформ.</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={"about-right"}>
                <img src={computer} alt={'computer'}/>
            </div>
        </section>
    )
}

export default About;