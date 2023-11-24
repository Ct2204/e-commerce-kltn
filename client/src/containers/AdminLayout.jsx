import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { routesAdmin } from "../routes.js";
import { useSelector } from "react-redux";

const AdminLayout = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return (
    <>
      {isLoggedIn ? (
        <>
          <Routes>
            {routesAdmin.map((route, idx) => (
              <Route key={idx} path={route.path} element={route.component} />
            ))}
          </Routes>
        </>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};

export default AdminLayout;
