import React from "react";
import "./index.css"; 

const Card =({title, desc, price, onClick})=>{
    return(
        <div className="card" onClick={onClick}>
            <img className="card-images" src="https://prod-mayang.sgp1.digitaloceanspaces.com/img/375883/1667358525/eyJ3aWR0aCI6NjQwLCJoZWlnaHQiOjY0MCwia2Jfc2l6ZSI6MjQ0LjE1M30%3D.jpeg" />
            <h5 className="card-title" >{title}</h5>
            <p className="card-desc">{desc}</p>
            <p className="card-price">{price}</p>
        </div>
    )
}

export default Card;