import React from 'react';
import About from "../components/main/about";
import Portfolio from "../components/main/portfolio";
import Services from "../components/main/services";

const Main: React.FC = () => {
    return(
        <>
            <About />
            <Portfolio />
            <Services />
        </>
    )
}

export default Main;