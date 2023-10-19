import React from 'react';
import Header from "../components/main/header";
import Footer from "../components/main/footer";
import Content from "../components/services/content";
import Consultation from "../components/ui/consultation";
import { motion } from 'framer-motion';
import {withPageAnimation} from "../hoc/withPageAnimation";
import Roadmap from "../components/ui/roadmap";
import Price from "../components/services/price";
import Services from "../components/main/services";


export interface ILayout {
    children: React.ReactNode
}


const DetailServicesLayout: React.FC<ILayout> = ({children}) => {
    return(
            <div className={`service-page`}>
                <section className={"service-section-header"}>
                    <Header />
                    <Content />
                </section>
                {children}
                <Services />
                <Roadmap />
                <Price />
                <Consultation />
                <section className={"section-footer"}>
                    <Footer />
                </section>
            </div>
    )
}

export default  withPageAnimation(DetailServicesLayout);