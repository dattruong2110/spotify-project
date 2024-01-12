import React from "react";
import AppRoutes from "./router/AppRoutes";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap-grid.min.css";
import "./components/global/global.scss";

const App = () => {
  return (
    <>
      <AppRoutes />
    </>
  );
};


export default App;
