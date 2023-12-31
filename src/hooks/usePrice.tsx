import React, {useEffect, useState} from 'react';

interface IPriceArr {
    title: string;
    text: string;
    link?: string;
    price: string;
}

interface IPrice {
    items: IPriceArr[]
}

interface IPriceConfig {
    [key: string]: IPrice
}

const priceConfig: IPriceConfig = {
    create: {
        items:[
            {title: 'Корпоративный сайт', text: 'Площадка, которая представит ваш бизнес в сети.', price: 'От 150 000 ₽'},
            {
                title: 'Интернет-магазин',
                text: 'Каталог, небольшой магазин или маркетплейс.',
                price: 'От 180 000 ₽'
            },
            {
                title: 'Лендинг',
                text: 'Одностраничник для продвижения товаров и услуг.',
                price: 'От 70 000 ₽'
            },
            {
                title: 'Онлайн-сервис',
                text: 'Многофункциональный ресурс с дополнительными сервисами.',
                price: 'От 250 000 ₽'
            }
        ]

    },
    marketing: {
        items: [
            {
                title: 'SEO-продвижение',
                text: 'Оптимизация сайта и публикаций на вашей площадке.',
                price: 'ОТ ... ₽'
            },
            {
                title: 'SMM-продвижение',
                text: 'Продвижение бизнеса в популярных социальных сетях.',
                price: 'ОТ ... ₽'
            },
            {
                title: 'Контекстная реклама',
                text: 'Настройка контекстной рекламы в поисковиках и на релевантных сайтах.',
                price: 'ОТ ... ₽'
            },
            {
                title: 'SERM',
                text: 'Повышение вашего имиджа в сети, работа с отзывами, публикация имиджевого контента.',
                price: 'ОТ ... ₽'
            },
            {
                title: 'Email-маркетинг',
                text: 'Составление писем для рекламных и информационных рассылок по электронной почте.',
                price: 'ОТ ... ₽'
            }
        ]
    },
    crm: {
        items: [
            {
                title: 'Внедрение CRM Bitrix24',
                text: 'Популярная система для автоматизации бизнес-процессов.',
                price: 'ОТ ... ₽'
            },
            {
                title: 'Внедрение amoCRM',
                text: 'Мощный функциональный продукт, который способствует оптимизации продаж.',
                price: 'ОТ ... ₽'
            }
        ]
    },
    additional: {
        items: [
            {
                title: 'Доработка сайта',
                text: '-',
                price: '-'
            },

        ]
    },
    design: {
        items: [
            {
                title: 'Дизайн интернет-магазина',
                text: 'Создание визуала, который повысит продажи.',
                price: 'ОТ ... ₽'
            },
            {
                title: 'Дизайн корпоративного сайта',
                text: 'Оформление, которое презентует ваш бизнес.',
                price: 'ОТ ... ₽'
            },
            {
                title: 'Разработка фирменного стиля',
                text: 'От идеи до полной упаковки – создание эксклюзивной и запоминающейся айдентики.',
                price: 'ОТ ... ₽'
            }
        ]
    },
    administration: {
        items: [
            {
                title: 'Техническая поддержка сайта',
                text: 'Круглосуточная работоспособность без сбоев.',
                price: 'ОТ ... ₽'
            },
            {
                title: 'Информационная поддержка сайта',
                text: 'Своевременная актуализация контента.',
                price: 'ОТ ... ₽'
            },
            {
                title: 'Комплексное обслуживание',
                text: 'Всестороннее администрирование.',
                price: 'ОТ ... ₽'
            }
        ]

    },
    manage: {
       items: [
           {
               title: 'Базовый контент-менеджмент',
               text: 'Стандартное ведение и наполнение сайта.',
               price: 'ОТ ... ₽'
           },
           {
               title: 'Комплексный контент-менеджмент',
               text: 'Полный спектр услуг специалиста по контенту.',
               price: 'ОТ ... ₽'
           },
           {
               title: 'Наполнение интернет-магазина товарами',
               text: 'Регулярное обновление каталога.',
               price: 'ОТ ... ₽'
           }
       ]
    },
    mobile: {
        items: [
            {
                title: 'Кроссплатформенная разработка мобильных приложений',
                text: 'Пишем на QtC++ для операционных систем Android и iOS.',
                price: 'ОТ ... ₽'
            }
        ]

    }
}

const usePrice = (str: string) => {
    const [price, setPrice] = useState<IPrice | null>(null)

    useEffect(() => {
        if (str && priceConfig[str]) {
            setPrice(priceConfig[str])
        }
    },[str])

    return price
}

export default usePrice;