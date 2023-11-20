

import { BrowserRouter as Router } from "react-router-dom";
import React, { useState } from "react";
import AppRoutes from "../Routes/Routes";
import Header from "../Header/Header";


const App = () => {
    const [activeNavItem, setActiveNavItem] = useState("Home");

    const handleNavItemClick = (navItem) => {
      setActiveNavItem(navItem);
    };

    return (
        <div className="app">
            <Header activeNavItem={activeNavItem} handleNavItemClick={handleNavItemClick} />

            <div className="container">
                
                <AppRoutes />

            </div>


            {/* <Footer /> */}
        </div>
    );
};

export default App;