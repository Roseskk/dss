import React from 'react';
import About from "../components/main/about";
import Portfolio from "../components/main/portfolio";
import Services from "../components/main/services";
import Blog from "../components/main/blog";
import Contacts from "../components/main/contacts";
import Skills from "../components/main/skills";
import withAnimation from "../hoc/withAnimation";
import Modal from "../components/ui/modal";
import MobileMenu from "../components/ui/mobileMenu";

const AnimatedAbout = withAnimation(About)
const AnimatedPortfolio = withAnimation(Portfolio)
const AnimatedServices = withAnimation(Services)
const AnimatedBlog = withAnimation(Blog)
const AnimatedContacts = withAnimation(Contacts)
const AnimatedSkills = withAnimation(Skills)

const Main: React.FC = () => {
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
        <>
            <Modal />
            <AnimatedAbout />
            <AnimatedPortfolio />
            <AnimatedServices titleBlack={'НАШИ'} titleBlue={'УСЛУГИ'} items={servicesItems} />
            <AnimatedBlog />
            <AnimatedContacts />
            <AnimatedSkills />
        </>
    )
}

export default Main;