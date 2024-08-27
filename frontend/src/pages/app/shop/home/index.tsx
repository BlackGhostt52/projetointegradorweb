import React from "react";
import { Helmet } from "react-helmet-async";
import { Header } from "./components/header";
import { Categories } from "./components/categories";

export const Home: React.FC = function () {
  return (
    <>
      <Helmet title="Principal" />
      <div className="">
        <Header />
        <Categories />
      </div>
    </>
  );
};
