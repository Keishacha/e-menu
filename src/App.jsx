import './App.css';
import Main from './Components/Page/Main';
import Promo from './Components/Promo/promo';
import Produk from './Components/Produk/produk';
import About from './Components/About/about'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Keranjang from './Components/Keranjang';

function App() {
  return (
    <Routes>
      <Route path="/keranjang" element={<Keranjang/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/promo" element={<Promo/>}/>
      <Route path="/produk" element={<Produk/>}/>
      <Route path="/" element={<Main/>}/>
    </Routes>
  );
}

export default App;
