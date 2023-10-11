import React from 'react';
import Header from "../components/main/header";
import Footer from "../components/main/footer";


export interface ILayout {
    children: React.ReactNode
}


const ServiceLayout: React.FC<ILayout> = ({children}) => {
    return(
        <div className={`home-page`}>
            <section className={"section-header"}>
                <Header />
            </section>
            {children}
            <section className={"section-footer"}>
                <Footer />
            </section>
        </div>
    )
}

export default ServiceLayout;