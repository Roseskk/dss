import React from 'react';
import About from "../components/main/about";
import Portfolio from "../components/main/portfolio";
import Services from "../components/main/services";
import Blog from "../components/main/blog";
import Contacts from "../components/main/contacts";
import Skills from "../components/main/skills";

const Main: React.FC = () => {
    return(
        <>
            <About />
            <Portfolio />
            <Services />
            <Blog />
            <Contacts />
            <Skills />
        </>
    )
}

export default Main;