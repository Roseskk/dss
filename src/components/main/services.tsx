import React, {useState} from 'react';
import {useResize} from "../../hooks/useResize";
import useCardContent from "../../hooks/useCardContent";
import {useLocation} from "react-router-dom";


const Services: React.FC = () => {
    const {width} = useResize()
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const location = useLocation();
    const pathnames = location.pathname.split('/').filter(x => x);


    const serviceContext = useCardContent(pathnames[pathnames.length-1])
    return(
        <section className={"service-section"}>
            <div className={"service-top"}>
                <h2>{serviceContext?.title} <span>{serviceContext?.sub}</span></h2>
                <hr />
            </div>
            {
                width <= 850
                ? <ul className={'service-mobile-list'}>
                        {serviceContext?.items.map((item, index) => {
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
                        {serviceContext?.items.map((item) => {
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