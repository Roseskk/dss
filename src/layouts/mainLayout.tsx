import React from 'react';
import Header from "../components/main/header";
import Footer from "../components/main/footer";
import Content from "../components/main/content";
import Scroll from "../components/main/scroll";

export interface ILayout {
    children: React.ReactNode
}

const MainLayout: React.FC<ILayout> = ({children}) => {
    return(
        <div className={"home-page"}>
            <section className={"section-header"}>
                <Header />
                <Content />
                <Scroll />
            </section>
            {children}
            <Footer />
        </div>
    )
}

export default MainLayout;