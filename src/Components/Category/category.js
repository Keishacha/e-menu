import React from "react";
import "./category.css";

const Category = () => {
    return(
        <div className="kategori">
            <div className="hoper">
            <h3 className="title"><b>Kategori</b></h3>
            <br></br>
                <button>Semua</button>
                <button>Snack</button>
                <button>Coffee</button>
                <button>Non Coffee</button>
                <button>TIKET</button>
                <button>Tea</button>
            </div>
        </div>
    )
}

export default Category;