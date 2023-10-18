import React, {useState} from 'react';
import {useResize} from "../../hooks/useResize";

interface IItem {
    id: number,
    counter: string,
    title: string,
    text: string,
}
interface IServices {
    titleBlack: string,
    titleBlue?: string,
    items: IItem[]
}
const Services: React.FC<IServices> = ({titleBlack, titleBlue, items}) => {
    const {width} = useResize()
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    return(
        <section className={"service-section"}>
            <div className={"service-top"}>
                <h2>{titleBlack} <span>{titleBlue}</span></h2>
                <hr />
            </div>
            {
                width <= 850
                ? <ul className={'service-mobile-list'}>
                        {items.map((item, index) => {
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
                        {items.map((item) => {
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