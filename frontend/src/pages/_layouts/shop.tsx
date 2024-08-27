import React from "react";
import { Outlet } from "react-router-dom";

export const ShopLayout: React.FC = function () {
  return (
    <>
      <Outlet />
    </>
  );
};
