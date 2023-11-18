import React, { useEffect } from "react";
import AppRoutes from "../Routes/Routes";

const App = () => {

    return (
        <div className="app">
            {/* <Header /> */}

            <div className="container">
                
                <AppRoutes />

            </div>


            {/* <Footer /> */}
        </div>
    );
};

export default App;