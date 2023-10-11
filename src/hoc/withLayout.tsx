import {useLocation} from "react-router-dom";
import MainLayout from "../layouts/mainLayout";
import React from "react";

const withLayout =  <P extends object>(Component: React.ComponentType<P>) => {
    return (props: P) => {
        const location = useLocation()
        const path = location.pathname
        const getLayout = () => {
            switch (path) {
                case '/': return MainLayout
                default: return MainLayout
            }
        }

        const Layout = getLayout()
        return (
            <Layout>
                <Component {...props} />
            </Layout>
        )
    }
}

export default withLayout;