import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/dashboard/Dashboard";

/**
 * Navigation component
 *
 * @component
 *
 * @returns {JSX.Element} The navigation component that handles routing.
 */
const Navigation = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </>
  );
};

export default Navigation;
