import React, {useEffect, useRef} from 'react';
import computer from '../../images/main/computer.png'
import {useScrollContext} from "../../hooks/useScrollContext";
import BlockAnimationComponent from "../../hoc/withContentAnimation";

const About: React.FC = () => {
    const aboutRef = useRef<HTMLElement>(null)
    const {setTarget} = useScrollContext()

    useEffect(() => {
        if (aboutRef.current) {
            setTarget(aboutRef.current)
        }
    },[setTarget])
    return(
        <section ref={aboutRef} className={"about"}>
            <div className={"about-left"}>
                <BlockAnimationComponent>
                    <span className={"about-title"}>Мы — команда с богатым опытом разработки <span>сложных digital-решений</span></span>
                </BlockAnimationComponent>
                <BlockAnimationComponent>
                    <p className={"about-p"}>Над выполнением поставленной задачи будут работать опытные специалисты – разработчики, маркетологи, администраторы, дизайнеры. Мы применяем лучший набор инструментов и в итоге получаем качественный результат. Именно поэтому в портфолио DSSystem – только успешно завершенные проекты, которые приносят прибыль своим владельцам.
                    </p>
                </BlockAnimationComponent>
                <div className={'about-card'}>
                    <ul>
                        <li>
                            <BlockAnimationComponent>
                                <h3>01</h3>
                            </BlockAnimationComponent>
                            <BlockAnimationComponent>
                                <span className={"about-card-subtitle"}>Комплексная веб-разработка</span>
                            </BlockAnimationComponent>
                            <BlockAnimationComponent>
                                <span>Сочетаем функциональность и качественное визуальное оформление.</span>
                            </BlockAnimationComponent>
                        </li>
                        <li>
                            <BlockAnimationComponent>
                                <h3>02</h3>
                            </BlockAnimationComponent>
                            <BlockAnimationComponent>
                                <span className={"about-card-subtitle"}>Поддержка и развитие </span>
                            </BlockAnimationComponent>
                            <BlockAnimationComponent>
                                <span>Активно коммуницируем с клиентами, предоставляем гарантию и поддерживаем после окончания работ.</span>
                            </BlockAnimationComponent>
                        </li>
                        <li>
                            <BlockAnimationComponent>
                                <h3>03</h3>
                            </BlockAnimationComponent>
                            <BlockAnimationComponent>
                                <span className={"about-card-subtitle"}>Эффективное продвижение</span>
                            </BlockAnimationComponent>
                            <BlockAnimationComponent>
                                <span>Выводим проекты в топ поисковиков и в лидеры среди конкурентов.</span>
                            </BlockAnimationComponent>
                        </li>
                        <li>
                            <BlockAnimationComponent>
                                <h3>04</h3>
                            </BlockAnimationComponent>
                            <BlockAnimationComponent>
                                <span className={"about-card-subtitle"}>Разработка приложений для мобильных устройств</span>
                            </BlockAnimationComponent>
                            <BlockAnimationComponent>
                                <span>Создаем удобные приложения для любых платформ.</span>
                            </BlockAnimationComponent>
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