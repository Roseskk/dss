import React from 'react';
import "./styles/main.scss"
import {useRoutes} from "react-router-dom";
import {routes} from "./routes";
import withRouter from "./hoc/withRouter";
import MainLayout from "./layouts/mainLayout";

function App() {
  const route = useRoutes(routes)
  return (
      <MainLayout>
          {route}
      </MainLayout>
  );
}

export default withRouter(App);
