import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HalamanUtama } from "../pages/HalamanUtama";
// import { HalamanAdd } from "../pages/HalamanAdd";

export const Routerlist = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HalamanUtama />} />
      </Routes>
    </BrowserRouter>
  );
};
