import React from 'react';
import Carousel from "../ui/swiper";
// import Swiper from "../ui/swiper";

const Skills: React.FC = () => {
    return(
        <section className={'section-skills'}>
            <div className={'section-skills-top'}>
                <h2>#<span>SKILLS</span></h2>
                <hr />
            </div>
            <div className={'section-skills-carousel'}>
                <Carousel />
            </div>
        </section>
    )
}

export default Skills;