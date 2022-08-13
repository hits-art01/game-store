import React from "react";
import { Routes, Route } from "react-router-dom";
import { publickRoutes } from "./router";

const AppRouter = () => {
  return (
    <Routes>
      {publickRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};

export default AppRouter;
