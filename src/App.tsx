import React from 'react';
import "./styles/main.scss"
import {useRoutes} from "react-router-dom";
import {routes} from "./routes";
import withRouter from "./hoc/withRouter";
import MainLayout from "./layouts/mainLayout";
import ScrollProvider from "./hooks/useScrollContext";
import ModalProvider from "./hooks/useModalContext";

function App() {
  const route = useRoutes(routes)
  return (
      <>
          <ScrollProvider>
              <ModalProvider>
                  <MainLayout>
                      {route}
                  </MainLayout>
              </ModalProvider>
          </ScrollProvider>
      </>
  );
}

export default withRouter(App);
