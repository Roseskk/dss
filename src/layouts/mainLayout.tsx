import React from 'react';
import Header from "../components/main/header";
import Footer from "../components/main/footer";
import Content from "../components/main/content";
import Scroll from "../components/main/scroll";
import {useHeaderScrollContext} from "../hooks/useHeaderScrollContext";
import withSplitAnimation from "../hoc/withSplitAnimation";
import SplitAnimation from "../components/ui/splitAnimation";
import { motion } from 'framer-motion';
import {withPageAnimation} from "../hoc/withPageAnimation";

export interface ILayout {
    children: React.ReactNode
}

const MainLayout: React.FC<ILayout> = ({children}) => {
    const {ref} = useHeaderScrollContext()
    return(
            <div className={`home-page`}>
                <section ref={ref} className={"section-header"}>
                    <Header />
                    <Content />
                    <Scroll />
                </section>
                {children}
                <section className={"section-footer"}>
                    <Footer />
                </section>
            </div>
    )
}

export default withPageAnimation(MainLayout);
