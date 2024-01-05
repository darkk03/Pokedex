import { BrowserRouter as Router } from "react-router-dom";
import React, { useState } from "react";
import AppRoutes from "../Routes/Routes";
import Header from "../Header/Header";


const App = () => {

    

    return (
        <div className="app">
            <Header />

            <div className="container">
                
                <AppRoutes />

            </div>
        </div>
    );
};

export default App;