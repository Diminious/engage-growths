import React, { useEffect } from "react";
import HeaderBar from "./components/HeaderBar";
import Footer from "./components/Footer";
import { Outlet, useNavigate } from "react-router-dom";

export default function Root() {

    const navigate = useNavigate()

    useEffect(() => {
        document.title = "FE Engage Growths Calculator";
        navigate("/calculator")
    }, [navigate])

    return (
        

        <div className="App">
            <HeaderBar/>
            <body>
                <Outlet/>
            </body>
            <Footer/>
        </div>
    )
}