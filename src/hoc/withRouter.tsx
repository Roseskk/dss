import React from 'react';
import {BrowserRouter} from "react-router-dom";

const WithRouter = <P extends object>(WrappedComponent:React.ComponentType<P>) => {
    const withRouterComponent: React.FC = (props) => {
        return(
            <BrowserRouter>
                <WrappedComponent {...props as P} />
            </BrowserRouter>
        )
    }
    return withRouterComponent
}

export default WithRouter;