import React , {useState} from "react";
import { Link } from "react-router-dom";
import { SlBasket } from 'react-icons/sl';
import "./navbar.css"

const Navbar = () => {

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal)
    }

    return(
        <>
            <div className="nav">
                <header>
                    <h2>Bara Kopi</h2>
                    <nav>
                        <ul className="nav_links">
                            <Link to='/' className="nav_link_list"><li>Beranda</li></Link>
                            <Link to='/Promo' className="nav_link_list"><span className="link"><li>Promo</li></span></Link>
                            <Link to='/Produk' className="nav_link_list"><li>Produk</li></Link>
                            <Link to='/About' className="nav_link_list"><li>Tentang Kami</li></Link>
                            <Link to='/Promo' className="nav_link_list"><li>Hubungi Kami</li></Link>
                        </ul>
                    </nav>
                    <div className="kanan">
                        <div className="keranjang">
                            <a href="https://basket.com">
                                <Link to='/Keranjang'><SlBasket/></Link>
                            </a>
                        </div>
                        <button onClick={toggleModal}> Masuk</button>
                    </div>
                </header>
                
            </div>

            {/* <div className="modal">
                <div className="overlay"></div>
                <div className="modal-content">
                    <h2>Hello Modal</h2>
                    <p>Allahumma rabba haadzihid da'watit taammah. Wash shalaatil qaa-imah. Aati muhammadal wasiilata wal fadhiilah, wab'atshu maqoomam mahmuudal ladzii wa'adtahu innaka la tukhliful mi'ad.</p>
                    <button className="close-modal" onClick={toggleModal}>X</button>
                </div>
            </div> */}
        </>
    )
}

export default Navbar;