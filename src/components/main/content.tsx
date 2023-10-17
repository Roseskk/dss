import React from 'react';
import header_arrow from "../../images/head/header_arrow.svg";
import {Link} from "react-router-dom";

const Content: React.FC = () => {
    return(
        <div className={"content-flex content"}>
                <div className={"content-even content-title"}>
                    РАЗРАБОТКА И ПРОДВИЖЕНИЕ САЙТОВ
                </div>

            <div className={"content-even__custom content_subtitle"}>
                    <div>
                        DSSystem – веб-студия полного цикла, которая занимается разработкой и продвижением digital-проектов. Дизайн, создание сайтов и приложений, доработка, маркетинг и администрирование – все это мы сделаем на высшем уровне. Работаем с небольшими частными и крупными корпоративными проектами.
                    </div>
                <Link className={"link_center"} to={"#"}>
                    <span className={"link"}>Подробнее</span>
                    <img src={header_arrow} alt={'arrow'} />
                </Link>

            </div>
        </div>
    )
}
export default Content;