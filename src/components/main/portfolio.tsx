import React, {useState} from 'react';
import portfolioPhoto from '../../images/main/portfoliophoto.png'

export interface IPortfolio {
    id: number,
    type: string,
    technology: string,
    year: string,
    title: string,
    sub: string,
    img: string
}

const Portfolio: React.FC = () => {
    const [cur, setCur] = useState(0);

    const handleNext = () => {
        setCur((prevCur) => (prevCur + 1) % portfolioArray.length);
    };

    const handlePrev = () => {
        setCur((prevCur) => (prevCur - 1 + portfolioArray.length) % portfolioArray.length);
    };
    const portfolioArray: IPortfolio[] = [
        {id: 1, img: portfolioPhoto, type:'Интернет-магазин', technology: 'JAva script + html5/css3 + 1C Битрикс', year: '2023', title: 'Lorem ipsum dolor sit amet, consectetur', sub: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis augue vel porta' },
        {id: 2, img: portfolioPhoto, type:'Интернет-магазин', technology: 'JAva script + html5/css3 + 1C Битрикс', year: '2023', title: 'Lorem ipsum dolor sit amet, consectetur', sub: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis augue vel porta' },
        {id: 3, img: portfolioPhoto, type:'Интернет-магазин', technology: 'JAva script + html5/css3 + 1C Битрикс', year: '2023', title: 'Lorem ipsum dolor sit amet, consectetur', sub: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis augue vel porta' },
        {id: 4, img: portfolioPhoto, type:'Интернет-магазин', technology: 'JAva script + html5/css3 + 1C Битрикс', year: '2023', title: 'Lorem ipsum dolor sit amet, consectetur', sub: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis augue vel porta' },
    ]
    return(
        <section className={"portfolio"}>
            <div className={"portfolio-top"}>
                <div>
                    <h2>НАШЕ <span>ПОРТФОЛИО</span></h2>
                </div>
                <hr />
                <div className={"portfolio-container"}>
                    <button onClick={handlePrev} className={"portfolio-btn"}>
                        <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.2" d="M0.939341 10.872C0.353554 11.4577 0.353554 12.4075 0.939341 12.9933L10.4853 22.5392C11.0711 23.125 12.0208 23.125 12.6066 22.5392C13.1924 21.9534 13.1924 21.0037 12.6066 20.4179L4.12132 11.9326L12.6066 3.44734C13.1924 2.86155 13.1924 1.9118 12.6066 1.32602C12.0208 0.740229 11.0711 0.740229 10.4853 1.32602L0.939341 10.872ZM22 10.4326L2 10.4326V13.4326L22 13.4326V10.4326Z" fill="black"/>
                        </svg>
                    </button>
                    <button onClick={handleNext} className={"btn-right"}>
                        <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.2" d="M0.939341 10.872C0.353554 11.4577 0.353554 12.4075 0.939341 12.9933L10.4853 22.5392C11.0711 23.125 12.0208 23.125 12.6066 22.5392C13.1924 21.9534 13.1924 21.0037 12.6066 20.4179L4.12132 11.9326L12.6066 3.44734C13.1924 2.86155 13.1924 1.9118 12.6066 1.32602C12.0208 0.740229 11.0711 0.740229 10.4853 1.32602L0.939341 10.872ZM22 10.4326L2 10.4326V13.4326L22 13.4326V10.4326Z" fill="black"/>
                        </svg>
                    </button>
                </div>
            </div>
            <div className={'portfolio-bottom'}>
                <ul style={{display: 'flex', transition: 'transform 0.5s ease', transform: `translateX(-${cur * 100}%)`}}>
                    {
                        portfolioArray.map((item, index) => {
                            return(
                                <li style={{flex: '0 0 100%'}}>
                                    <img src={item.img} alt={'card'} />
                                    <div className={'portfolio-bottom-wrapper'}>
                                        <div className={'portfolio-bottom__top'}>
                                            <span>{item.type}</span>
                                            <span>{item.technology}</span>
                                        </div>
                                        <div className={'portfolio-bottom__anc'}>
                                            <div className={'portfolio-bottom__bots'}>
                                                <h2>{item.year}</h2>
                                                <span className={'portfolio-bottom-title'}>{item.title}</span>
                                                <span>{item.sub}</span>
                                            </div>
                                            <div className={'portfolio-bottom-arrow'}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="42" height="23" viewBox="0 0 42 23" fill="none">
                                                    <path d="M41.0607 12.9933C41.6464 12.4075 41.6464 11.4577 41.0607 10.872L31.5147 1.32601C30.9289 0.740226 29.9792 0.740226 29.3934 1.32601C28.8076 1.9118 28.8076 2.86155 29.3934 3.44733L37.8787 11.9326L29.3934 20.4179C28.8076 21.0037 28.8076 21.9534 29.3934 22.5392C29.9792 23.125 30.9289 23.125 31.5147 22.5392L41.0607 12.9933ZM1.31134e-07 13.4326L40 13.4326L40 10.4326L-1.31134e-07 10.4326L1.31134e-07 13.4326Z" fill="white"/>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>

        </section>
    )
}

export default Portfolio;