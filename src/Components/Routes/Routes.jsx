import React from "react";
import { Route, Routes } from 'react-router-dom';
import Home from "../Home/Home";
import { ROUTES } from "../../utils/routes";
import Pokedex from "../Pokedex/Pokedex";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.POKEDEX} element={<Pokedex />} />
    </Routes>
  );
};

export default AppRoutes;
