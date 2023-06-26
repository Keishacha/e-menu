import { Component, useState } from 'react';
import './Main.css';
import Card from '../Card/';
import Category from '../Category/category';
import Model from '../Model';
import Navbar from '../Navbar/navbar';
import Outlet from '../Outlet/outlet';
import Outlet2 from '../Outlet/outlet2';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [show, setShow] = useState(false);

  console.log(show);


  return (
    <div className="App">
      
      <Navbar/>
    
      <br></br>
      <img src='https://i.pinimg.com/564x/04/8c/44/048c44cd151b422746ebc6858d765fd3.jpg'></img>

      <Outlet/>

      <Outlet2/>

      <Category/>

      <h3 className="product-1">Produk Terlaris</h3>
      <br></br>
      <div className="card-content" onClick={() => setShow(true)}>
      
        <Card title="Iced Brown Blost" desc="wejbjkwebc" price="Rp. 18.000" />
        <Card title="Banana Passion" desc="wejbjkwebc" price="Rp. 15.000"/>
        <Card title="Americano Slam"desc="wejbjkwebc" price="Rp. 15.000"/>
      
        <Card title="Banaaaa" desc="wejbjkwebc" price="Rp. 18.000"/>
        <Card title="Banaaaa" desc="wejbjkwebc" price="Rp. 18.000"/>
        <Card title="Banaaaa" desc="wejbjkwebc" price="Rp. 18.000"/>
      </div>
      <br></br>
      
      <h3 className="product-2">Produk Rekomendasi</h3>
      <br></br>
      <div className="card-content" onClick={() => setShow(true)}>
      
      <Card title="Iced Brown Blost" desc="wejbjkwebc" price="Rp. 18.000"/>
      <Card title="Banana Passion" desc="wejbjkwebc" price="Rp. 15.000"/>
      <Card title="Americano Slam"desc="wejbjkwebc" price="Rp. 15.000"/>
    
      <Card title="Banaaaa" desc="wejbjkwebc" price="Rp. 18.000"/>
      <Card title="Banaaaa" desc="wejbjkwebc" price="Rp. 18.000"/>
      <Card title="Banaaaa" desc="wejbjkwebc" price="Rp. 18.000"/>
    </div>

    <Model title="Iced Brown Blost" desc="Minuman" price="Rp. 18.000" show={show} setShow={setShow}/>

    </div>
  );
}
export default App;