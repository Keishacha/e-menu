import React from "react";
import "./outlet.css";
import { BiMap } from 'react-icons/bi';

const Outlet = () => {
    return(
        <div className="all">
            <div className="awal">
                <h3><b>Pilih Outlet</b></h3>
            </div>
            <div className="bawah">
                <div className="icon">
                    <a href="https://map.com">
                         <BiMap/>
                    </a>
                </div>
                <div className="desc">
                        <b>Bara Kopi</b>
                        <p className="p1">(Belum Ada Rating)</p>
                        <p>Jl. Prapanca Raya No.25, RT.2/RW.3, Pulo, Kec.Kby. Baru, Kota Jakarta Selatan, DKI Jakarta</p>
                </div>
            </div>
        </div>
    )
}

export default Outlet;