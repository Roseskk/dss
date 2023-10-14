import React from 'react';
import "./styles/main.scss"
import {useRoutes} from "react-router-dom";
import {routes} from "./routes";
import withRouter from "./hoc/withRouter";
import MainLayout from "./layouts/mainLayout";
import ScrollProvider from "./hooks/useScrollContext";
import ModalProvider from "./hooks/useModalContext";
import HeaderScrollProvider from "./hooks/useHeaderScrollContext";
import withLayout from "./hoc/withLayout";
import {MobileMenuProvider} from "./hooks/useMobileMenuContext";

function App() {
  const route = useRoutes(routes)
  const LayoutedRoute = withLayout(() => route)
  return (
      <>
          <MobileMenuProvider>
              <ScrollProvider>
                  <HeaderScrollProvider>
                      <ModalProvider>
                          <LayoutedRoute />
                      </ModalProvider>
                  </HeaderScrollProvider>
              </ScrollProvider>
          </MobileMenuProvider>
      </>
  );
}

export default withRouter(App);
