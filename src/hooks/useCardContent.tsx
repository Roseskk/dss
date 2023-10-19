import {useEffect, useState} from "react";


interface ICardContent {
    title: string;
    sub: string;
    items: {
        id: number,
        counter: string,
        link?:string,
        title: string,
        text: string
    }[]
}
interface ICardContentConfig {
    [key: string] : ICardContent
}
const cardConfig: ICardContentConfig = {
    home: {
        title: 'НАШИ',
        sub: 'УСЛУГИ',
        items: [
            {id: 1, counter: '01', title: 'Разработка сайтов', text: 'Разрабатываем любые сайты (от лендингов до интернет-магазинов под ключ) на современных CMS и фреймворках, таких как Laravel.'},
            {id: 2, counter: '02', title: 'Маркетинг', text: 'Продвигаем проекты, используем проверенные инструменты digital-маркетинга, оптимизируем сайты по канонам SEO.'},
            {id: 3, counter: '03', title: 'CRM-системы', text: 'Создаем и внедряем CRM-системы для автоматизации вашего бизнеса и повышения эффективности продаж. '},
            {id: 4, counter: '04', title: 'Доработка сайтов', text: 'Исправляем ошибки предыдущих разработчиков. Лишнее – убираем, нужное – добавляем.'},
            {id: 5, counter: '05', title: 'Дизайн', text: 'Создаем уникальный веб-дизайн сайта или приложения, учитывая айдентику компании. Разработаем эксклюзивный фирменный стиль для начинающих проектов.'},
            {id: 5, counter: '06', title: 'Администрирование', text: 'Отдаем проекты под контроль опытных администраторов, выполняем комплексное обслуживание сайта.'},
            {id: 5, counter: '07', title: 'Контент-менеджмент', text: 'Предлагаем услуги наполнения сайта контентом – уникальными текстами и медиа.'},
            {id: 5, counter: '08', title: 'Мобильная разработка', text: 'Разрабатываем функциональные кроссплатформенные приложения на QtC++.'},
        ]
    },
    marketing: {
        title: 'НАШИ',
        sub: 'УСЛУГИ',
        items: [
            {id: 1, counter: '01', title: 'Детальный маркетинговый анализ', text: 'Узнаем, что нужно вашей целевой аудитории и какие приемы уже используют ваши конкуренты.'},
            {id: 2, counter: '02', title: 'Комплексный аудит сайта ', text: 'Разберемся, насколько готова ваша площадка к продвижению и что в нем нужно поменять с точки зрения раскрутки.'},
            {id: 3, counter: '03', title: 'Написание продающих текстов', text: 'Создадим уникальные оптимизированные тексты, которые будут продавать продукт за вас.'},
            {id: 4, counter: '04', title: 'Работа с отзывами', text: 'Будем отслеживать отзывы потребителей, улучшим ваш имидж и повысим лояльность клиентов.'},
            {id: 5, counter: '05', title: 'Продвижение в соцсетях', text: 'Настроим таргет, поработаем с контентом, привлечем новых подписчиков. '},
            {id: 6, counter: '06', title: 'Запуск рекламы', text: 'Займемся настройкой контекстной рекламы, повысим видимость вашего проекта в сети.'},
        ]
    },
    crm: {
        title: 'ЧТО МЫ',
        sub: 'ДЕЛАЕМ?',
        items: [
            {id: 1, counter: '01', title: 'Стандартная настройка', text: 'Поможем с базовыми конфигурациями, настроим необходимые функции.'},
            {id: 2, counter: '02', title: 'Интеграция с социальными сетями, мессенджерами, сайтами, почтой', text: 'Перенесем все переписки и важные данные в CRM-систему, чтобы вам было удобно контролировать общение с клиентами и принимать заявки.'},
            {id: 3, counter: '03', title: 'Подключение IP-телефонии', text: 'Объединим CRM и IP-телефонию – аудиозаписи разговоров автоматически будут сохраняться в нужных карточках, и вы сможете их прослушать, когда понадобится.'},
            {id: 4, counter: '04', title: 'Анализ воронки продаж', text: 'Подключим сквозную аналитику, которая покажет вам, насколько хорошо работает система продаж.'},
            {id: 5, counter: '05', title: 'Организация лайв-чата', text: 'Интегрируем онлайн-чат и CRM-систему, чтобы вы могли в удобном формате сохранять данные из переписки.'},
            {id: 6, counter: '06', title: 'Импорт данных из 1С', text: 'Поможем импортировать ключевую информацию из продуктов 1C для удобной работы в единой программе.'},
            {id: 7, counter: '07', title: 'Обучение сотрудников', text: 'Объясним, как работает система – к новому сложно привыкнуть, но уже через несколько дней ваш персонал не сможет представить работу без CRM.'},
        ]
    },
    additional: {
        title: 'Что включает доработка сайта?',
        sub: '',
        items: [
            {id: 1, counter: '01', title: 'Исправление ошибок', text: 'Найдем проблемы и исправим – сайт будет работать исправно и начнет грузиться быстрее.'},
            {id: 2, counter: '02', title: 'Доработка дизайна', text: 'Доработаем визуал, сделаем интерфейс более современным и удобным.'},
            {id: 3, counter: '03', title: 'Перенос на другой движок', text: 'Выберем удобную и функциональную CMS и перенесем на нее веб-сайт.'},
            {id: 4, counter: '04', title: 'Добавление новых функций', text: 'Сделаем ваш сайт более функциональным для посетителей.'},
            {id: 5, counter: '05', title: 'Интеграция с необходимыми сервисами', text: 'Добавим новые возможности – интегрируем площадку с популярными сервисами оплаты, доставки или другими, которые соответствуют потребностям ваших клиентов.'},
        ]
    },
    design: {
        title: 'Как мы создаем',
        sub: 'ДИЗАЙН?',
        items: [
            {id: 1, counter: '01', title: 'Исследование вашей ЦА', text: 'Разбираемся, что нужно вашей целевой аудитории и какая стилистика понравится вашим клиентам.'},
            {id: 2, counter: '02', title: 'Проработка концепции', text: 'Придумаем и согласуем с вами идею, которая поможет вам выделиться. Разработаем несколько прототипов и предложим вам на рассмотрение.'},
            {id: 3, counter: '03', title: 'Разработка логотипа', text: 'Создадим логотип и покажем, как его можно адаптировать на сайте, страницах в социальных сетях или на физических носителях.'},
            {id: 4, counter: '04', title: 'Создание ключевых элементов', text: 'Дополним вашу айдентику – выберем шрифты, подберем основные цвета.'},
            {id: 5, counter: '05', title: 'Масштабирование', text: 'Покажем ваш фирменный стиль миру – оформим площадку, закажем полиграфию для печати визиток и брендбуков.'},
        ]
    },
    administration: {
        title: 'Что включает услуга',
        sub: 'поддержки сайта?',
        items: [
            {id: 1, counter: '01', title: 'Исправление ошибок', text: 'Выявим и устраним неполадки как можно оперативнее, чтобы ваша площадка работала бесперебойно.'},
            {id: 2, counter: '02', title: 'Техническая доработка', text: 'Сделаем все, чтобы ваш веб-сайт был удобным и полезным, – адаптируем его под мобильные устройства, добавим новые категории, разделы и страницы, установим необходимые плагины, скрипты, виджеты и модули.'},
            {id: 3, counter: '03', title: 'Защита от кибератак', text: 'Позаботимся о безопасности – защитим от DDoS-атак, хакеров, вирусов и всего того, что может навредить вашему бизнесу.'},
            {id: 4, counter: '04', title: 'Сохранение бэкапов', text: 'Будем создавать резервные копии ежедневно, чтобы можно было без проблем восстановить ресурс при серьезных неисправностях.'},
            {id: 5, counter: '05', title: 'Интеграция и внедрение', text: 'Интегрируем CRM, ERP, 1С, чтобы вы могли оптимизировать и автоматизировать бизнес-процессы.'},
            {id: 6, counter: '06', title: 'Публикация актуального контента', text: 'Будем регулярно наполнять страницы интересными и оптимизированными текстами, фото и видео.'},
        ]
    },
    manage: {
        title: 'Услуги наполнения сайта',
        sub: '',
        items: [
            {id: 1, counter: '01', title: 'Подготовка публикаций', text: 'Готовим и структурируем тексты, картинки, видеоматериалы, чтобы контент был читабельным и гармоничным.'},
            {id: 2, counter: '02', title: 'Подбор медиаматериалов', text: 'Находим и отправляем на публикацию релевантные изображения и видеоконтент, редактируем их до верного формата.'},
            {id: 3, counter: '03', title: 'Верстка материалов', text: 'Оформляем заголовки, абзацы, подписи к картинкам, видео и другие элементы контента с помощью гипертекстовой разметки.'},
            {id: 4, counter: '04', title: 'Публикация контента', text: 'Регулярно добавляем статьи, которые заинтересуют посетителей и обеспечат видимость сайта в поисковых системах.'},
            {id: 5, counter: '05', title: 'Наполнение каталога', text: 'Добавляем новые категории и товары в интернет-магазин.'},
            {id: 6, counter: '06', title: 'SEO-оптимизация', text: 'Работаем с мета-тегами, публикуем только уникальные и оптимизированные статьи.'},
        ]
    },
    mobile: {
        title: 'Что входит в мобильную разработку?',
        sub: '',
        items: [
            {id: 1, counter: '01', title: 'Аналитика', text: 'Обсуждаем требования к будущему продукту, делаем наработки по дизайну и функциональности.'},
            {id: 2, counter: '02', title: 'Составление ТЗ', text: 'Подробно описываем, каким будет приложение, прорабатываем User Story (персонажей пользователей).'},
            {id: 3, counter: '03', title: 'Разработка дизайна', text: 'Работаем над визуальной составляющей – привлекаем UI/UX-дизайнера, который сделает оформление не только красивым и современным, но и удобным.'},
            {id: 4, counter: '04', title: 'Создание прототипа', text: 'Готовим макеты, адаптированные для гаджетов с разными размерами экранов.'},
            {id: 5, counter: '05', title: 'Интеграция с API', text: 'Работаем над серверной частью.'},
            {id: 6, counter: '06', title: 'Тестирование', text: 'Выявляем баги и убираем их, чтобы готовое приложение работало без ошибок.'},
            {id: 7, counter: '07', title: 'Публикация в Google Play и App Store', text: 'Показываем продукт миру и делаем его доступным для пользователей.'},
        ]
    }
}

const useCardContent = (str: string) => {
    const [cardContent, setCardContent] = useState<ICardContent>()

    useEffect(() => {
        if (str && cardConfig[str]) {
            setCardContent(cardConfig[str])
        }
    },[str])

    return cardContent
}

export default useCardContent