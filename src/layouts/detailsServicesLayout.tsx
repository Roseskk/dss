import React from 'react';
import Header from "../components/main/header";
import Footer from "../components/main/footer";
import Content from "../components/services/content";
import Consultation from "../components/ui/consultation";


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
            <Consultation />
            <section className={"section-footer"}>
                <Footer />
            </section>
        </div>
    )
}

export default DetailServicesLayout;