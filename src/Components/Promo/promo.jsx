import React from "react";
import Navbar from "../Navbar/navbar";
import "./promo.css";
import Outlet from "../Outlet/outlet";

const Promo = () => {
    return(
        <div>
            <Navbar/>
            <Outlet/>
            <div className="promo">
            <h4><b>Promo</b></h4>
                Saat ini tidak ada promo yang tersedia
            </div>
        </div>
        
    )
}

export default Promo;