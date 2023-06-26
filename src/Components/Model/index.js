import React from "react";
import "./index.css";

const Model =({title, desc, price, show, setShow})=>{
    return(
        <div className={`model ${show ? "d-flex" : "d-none"}`}>
            <p class='detail-product'>Detail Produk</p>
            <hr></hr>
            <div className="model-body">
                <div className='flex'>
                    <img className="model-images" src="https://images.unsplash.com/photo-1667747620736-410b80fc3a5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
                    <div className="card">
                        <h5  className="model-title">{title}</h5>
                        <p  className="model-desc">{desc}</p>
                        <p  className="model-price">{price}</p>
                    </div>
                </div>
                <div className="love">
                <p>favorit</p>
                <button><i class="fa-regular fa-heart"></i></button>
                </div>
                <p class='relative' onClick={() => setShow(false)}>X</p>
            </div>
        </div>
    )
}

export default Model;