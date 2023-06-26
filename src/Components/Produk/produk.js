import React from "react";
import Navbar from "../Navbar/navbar";
import Outlet from "../Outlet/outlet";
import Outlet2 from "../Outlet/outlet2";
import './produk.css';

const Produk = () => {
    return(
        <div className="product">
            <Navbar/>
            <Outlet/>
            <Outlet2/>
            <div className="category">
                <h4>Kategori</h4>
                <p>Semua Produk</p>
                <p>Snack</p>
                <p>Coffee</p>
                <p>Non Coffee</p>
                <p>Tiket</p>
                <p>Tea</p>
            </div>
        </div>
    )
}

export default Produk;