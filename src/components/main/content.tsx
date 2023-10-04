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
                    Vulputate orci sed tempor nunc leo iaculis imperdiet. Leo luctus pharetra euismod sed molestie sodales cursus. Ullamcorper dui nunc, duis lorem eget tristique augue vitae integer Vulputate orci sed tempor nunc leo iaculis imperdiet. Leo luctus pharetra euismod sed molestie sodales cursus. Ullamcorper dui nunc, duis lorem eget tristique augue vitae integer
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