import React from 'react';
import About from "../components/main/about";
import Portfolio from "../components/main/portfolio";
import Services from "../components/main/services";
import Blog from "../components/main/blog";
import Contacts from "../components/main/contacts";
import Skills from "../components/main/skills";
import withAnimation from "../hoc/withAnimation";

const AnimatedAbout = withAnimation(About)
const AnimatedPortfolio = withAnimation(Portfolio)
const AnimatedServices = withAnimation(Services)
const AnimatedBlog = withAnimation(Blog)
const AnimatedContacts = withAnimation(Contacts)
const AnimatedSkills = withAnimation(Skills)

const Main: React.FC = () => {

    return(
        <>
            <AnimatedAbout />
            <AnimatedPortfolio />
            <AnimatedServices />
            <AnimatedBlog />
            <AnimatedContacts />
            <AnimatedSkills />
        </>
    )
}

export default Main;