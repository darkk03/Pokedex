import React from "react";
import {Route, Routes} from 'react-router-dom';
import {ROUTES} from "../../utils/routes"

import Home from "../Home/Home";

const AppRoutes = () => {
    return(
        <Routes>
            <Route index element={<Home />}/>
        </Routes>
    );
};

export default AppRoutes;