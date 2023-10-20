import React, {useState} from 'react';
import yes from '../../images/ui/okay.svg'
import no from '../../images/ui/decline.svg'
import {useResize} from "../../hooks/useResize";
import {useModalContext} from "../../hooks/useModalContext";

interface IPrice {
    title: string,
    start: boolean,
    comfort: boolean,
    elite: boolean
}

interface IMobilePrice {
    title: string,
    sub: string,
    items: string[]
}

const Price: React.FC = () => {

    const {width} = useResize()
    const [column, setColumn] = useState<number|null>(null)
    const {setOpen} = useModalContext()

    const price: IPrice[] = [
        {title: 'Маркетинг-дизайн', start: true, comfort: true, elite: true},
        {title: 'Разработка УТП', start: true, comfort: true, elite: true},
        {title: 'Анализ конкурентов', start: true, comfort: true, elite: true},
        {title: 'Хостинг — на 2 месяца', start: true, comfort: true, elite: true},
        {title: 'Доменное имя', start: false, comfort: true, elite: true},
        {title: 'SSL-сертификат', start: false, comfort: true, elite: true},
        {title: 'Инструкции к сайту', start: false, comfort: true, elite: true},
        {title: 'Наполнение сайта', start: false, comfort: false, elite: true},
        {title: 'Контекстная реклама', start: false, comfort: false, elite: true},
    ]

    const mobilePrices: IMobilePrice[] = [
        {title: 'START', sub: 'Lorem ipsum dolor sit amet', items: ['Маркетинг-дизайн','Разработка УТП','Анализ конкурентов','Хостинг — на 2 месяца']},
        {title: 'COMFORT', sub: 'Lorem ipsum dolor sit amet', items: ['Маркетинг-дизайн','Разработка УТП','Анализ конкурентов','Хостинг — на 2 месяца','Доменное имя','SSL-сертификат','Инструкции к сайту']},
        {title: 'ELITE', sub: 'Lorem ipsum dolor sit amet', items: ['Маркетинг-дизайн','Разработка УТП','Анализ конкурентов','Хостинг — на 2 месяца','Доменное имя','SSL-сертификат','Инструкции к сайту','Наполнение сайта','Контекстная реклама']},
    ]

    const handleSelectColumn = (num: number) => {
        setColumn(num)
        setOpen(true)
    }

    return(
        <section className={'section-price'}>
            {
                width <= 1200
                ? <>
                    <div className={'section-price-mobile'}>
                        <h2>ПАКЕТЫ<span>УСЛУГ</span></h2>
                        {
                            mobilePrices.map((value, index) => {
                                return(
                                    <div key={index} className={'price-mobile-wrapper'}>
                                        <h3 className={'price-mobile-title'}>{value.title}</h3>
                                        <h4 className={'price-mobile-sub'}>{value.sub}</h4>
                                        {
                                            value.items.map((item, idx) => {
                                                return(
                                                    <div className={'price-mobile-values'} key={`${idx + 'mobile'}`}>
                                                        {item}
                                                    </div>
                                                )
                                            })
                                        }
                                        <div className={'price-content-title price-content-bottom'}>ЗАКАЗАТЬ
                                            <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M21.0607 12.9933C21.6464 12.4075 21.6464 11.4577 21.0607 10.872L11.5147 1.32602C10.9289 0.74023 9.97919 0.74023 9.3934 1.32602C8.80761 1.9118 8.80761 2.86155 9.3934 3.44734L17.8787 11.9326L9.3934 20.4179C8.80761 21.0037 8.80761 21.9534 9.3934 22.5392C9.97918 23.125 10.9289 23.125 11.5147 22.5392L21.0607 12.9933ZM-1.31134e-07 13.4326L20 13.4326L20 10.4326L1.31134e-07 10.4326L-1.31134e-07 13.4326Z" fill="black"/>
                                            </svg>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    </>
                : <>
                        <div className={'price-head'}>
                            <div className={'price-head-first'}>
                                <h2>ПАКЕТЫ<span>УСЛУГ</span></h2>
                            </div>
                            <div onClick={() => handleSelectColumn(2)} className={'price-head-next'}>
                                <h3>START</h3>
                                <span>Lorem ipsum dolor sit amet</span>
                            </div>
                            <div onClick={() => handleSelectColumn(3)} className={'price-head-next'}>
                                <h3>COMFORT</h3>
                                <span>Lorem ipsum dolor sit amet</span>
                            </div>
                            <div onClick={() => handleSelectColumn(4)} className={'price-head-next'}>
                                <h3>ELITE</h3>
                                <span>Lorem ipsum dolor sit amet</span>
                            </div>
                        </div>
                        <div className={'price-content'}>
                            {
                                price.map((item, idx) => {
                                    return(
                                        <>
                                            <div className={'price-content-title'}>{item.title}</div>
                                            <div onClick={() => handleSelectColumn(2)} className={`price-content-boolean ${column === 2 ? 'price-selected-column' : ''}`}>{item.start ? <img className={'price-content-image'} src={yes} alt={'yes'}/>: <img className={'price-content-image'} src={no}  alt={'no'}/>}</div>
                                            <div onClick={() => handleSelectColumn(3)} className={`price-content-boolean ${column === 3 ? 'price-selected-column' : ''}`}>{item.comfort ? <img className={'price-content-image'} src={yes} alt={'yes'}/>: <img className={'price-content-image'} src={no}  alt={'no'}/>}</div>
                                            <div onClick={() => handleSelectColumn(4)} className={`price-content-boolean ${column === 4 ? 'price-selected-column' : ''}`}>{item.elite ? <img className={'price-content-image'} src={yes} alt={'yes'}/>: <img className={'price-content-image'} src={no}  alt={'no'}/>}</div>
                                        </>
                                    )
                                })
                            }
                        </div>
                        <div className={'price-content'}>
                            <div className={'price-content-title price-content-bottom'}></div>
                            <div onClick={() => handleSelectColumn(2)} className={`price-content-title price-content-bottom ${column === 2 ? 'price-selected-link' : ''}`}>ЗАКАЗАТЬ <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21.0607 12.9933C21.6464 12.4075 21.6464 11.4577 21.0607 10.872L11.5147 1.32602C10.9289 0.74023 9.97919 0.74023 9.3934 1.32602C8.80761 1.9118 8.80761 2.86155 9.3934 3.44734L17.8787 11.9326L9.3934 20.4179C8.80761 21.0037 8.80761 21.9534 9.3934 22.5392C9.97918 23.125 10.9289 23.125 11.5147 22.5392L21.0607 12.9933ZM-1.31134e-07 13.4326L20 13.4326L20 10.4326L1.31134e-07 10.4326L-1.31134e-07 13.4326Z" fill="black"/>
                            </svg>
                            </div>
                            <div onClick={() => handleSelectColumn(3)} className={`price-content-title price-content-bottom ${column === 3 ? 'price-selected-link' : ''}`}>ЗАКАЗАТЬ
                                <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21.0607 12.9933C21.6464 12.4075 21.6464 11.4577 21.0607 10.872L11.5147 1.32602C10.9289 0.74023 9.97919 0.74023 9.3934 1.32602C8.80761 1.9118 8.80761 2.86155 9.3934 3.44734L17.8787 11.9326L9.3934 20.4179C8.80761 21.0037 8.80761 21.9534 9.3934 22.5392C9.97918 23.125 10.9289 23.125 11.5147 22.5392L21.0607 12.9933ZM-1.31134e-07 13.4326L20 13.4326L20 10.4326L1.31134e-07 10.4326L-1.31134e-07 13.4326Z" fill="black"/>
                                </svg>
                            </div>
                            <div onClick={() => handleSelectColumn(4)} className={`price-content-title price-content-bottom ${column === 4 ? 'price-selected-link' : ''}`}>ЗАКАЗАТЬ
                                <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21.0607 12.9933C21.6464 12.4075 21.6464 11.4577 21.0607 10.872L11.5147 1.32602C10.9289 0.74023 9.97919 0.74023 9.3934 1.32602C8.80761 1.9118 8.80761 2.86155 9.3934 3.44734L17.8787 11.9326L9.3934 20.4179C8.80761 21.0037 8.80761 21.9534 9.3934 22.5392C9.97918 23.125 10.9289 23.125 11.5147 22.5392L21.0607 12.9933ZM-1.31134e-07 13.4326L20 13.4326L20 10.4326L1.31134e-07 10.4326L-1.31134e-07 13.4326Z" fill="black"/>
                                </svg>
                            </div>
                        </div>
                    </>
            }
        </section>
    )
}

export default Price;