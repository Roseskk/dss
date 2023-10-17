import React from 'react';
import "./styles/main.scss"
import {BrowserRouter, useLocation, useRoutes} from "react-router-dom";
import {routes} from "./routes";
import withRouter from "./hoc/withRouter";
import ScrollProvider from "./hooks/useScrollContext";
import ModalProvider from "./hooks/useModalContext";
import HeaderScrollProvider from "./hooks/useHeaderScrollContext";
import withLayout from "./hoc/withLayout";
import {MobileMenuProvider} from "./hooks/useMobileMenuContext";
import {AnimationProvider} from "./hooks/useAnimationContext";
import {NavigationProvider} from "./hooks/useNavigationContext";
import {AnimatePresence, motion} from "framer-motion";
import AppRoutes from "./appRoutse";
import withAppLoader from "./hoc/withAppLoader";

function App() {
  // const route = useRoutes(routes)
  // const LayoutedRoute = withLayout(() => route)
  //   const location = useLocation(); // Добавь это

    // const locationLast = location.pathname.split('/')

    // console.log(locationLast[locationLast.length - 1])

    // const [currentKey, setCurrentKey] = React.useState(location.pathname);
    // const [prevKey, setPrevKey] = React.useState('');
    //
    // React.useEffect(() => {
    //     setPrevKey(currentKey);
    //     setCurrentKey(location.pathname);
    // }, [location.pathname, currentKey]);
    //
    // const animationKey = `${prevKey}-${currentKey}`;

    return (
            <AnimationProvider>
                <NavigationProvider>
                    <MobileMenuProvider>
                        <ScrollProvider>
                            <HeaderScrollProvider>
                                <ModalProvider>
                                    <BrowserRouter>
                                        <AppRoutes />
                                    </BrowserRouter>
                                </ModalProvider>
                            </HeaderScrollProvider>
                        </ScrollProvider>
                    </MobileMenuProvider>
                </NavigationProvider>
            </AnimationProvider>
    );
}

export default withAppLoader(App);
