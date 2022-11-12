import React from "react";
import { NavLink } from "react-router-dom";

const Navbar =()=>{
    return(
        <>
            <Nav>
                <NavLink to="/">
                    <h1>logo</h1>
                </NavLink>
                <Bars/>
                <NavMenu>
                    <NavLink to="/beranda" activeStyle>
                        Beranda
                    </NavLink>
                    <NavLink to="/produk" activeStyle>
                        Produk
                    </NavLink>
                    <NavLink to="/Promo" activeStyle>
                        Promo
                    </NavLink>
                    <NavLink to="/tentang-kami" activeStyle>
                        Tentang Kami
                    </NavLink>
                    <NavLink to="/hubungi-kami" activeStyle>
                        Hubungi Kami
                    </NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/keranjang">Keranjang</NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    )
};
export default Navbar;