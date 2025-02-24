import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Product from './Products/Products';
import Home from './Home/Home';
import Orders from './Orders/Orders'


function App() {
  const openMenu = () =>{
    document.querySelector(".sidebar")?.classList.add("open");
  }
  const closeMenu = () =>{
    document.querySelector(".sidebar")?.classList.remove("open");
  }
  return (
    <div className="grid-container">
<head> 
    <link rel="stylesheet" href="style.css"/>
    <title>Destroyed Presence</title>
</head>   
<body>
    <div>
        <header className="header">
            <div className="brand">
                <header className="header">
                    <div className="brand">
                        <button onClick={openMenu}>&#9776;</button>
                        <a href="index.html">Destroyed Presence</a>
                    </div>
                    <div className="header-links">
                        <Link to="/">Home</Link>
                        <Link to="/catalog">Catalog</Link>
                        <Link to="/orders">Orders</Link>
                    </div>
                </header>   
            </div>
            <div className="header-links">
                <a href="cart.html">Cart</a>
                <a href="signin.html">Sign In</a>
            </div>
        </header>

        <aside className="sidebar">
            <h3>Shopping Categories</h3>
            <button className="sidebar-close-button" onClick={closeMenu}>x</button>
            <ul>
                <li>  <a href="index.html">Pants</a>  </li>
                <li>  <a href="index.html">Shirts</a>  </li>            
            </ul>  
        </aside>
        <main className="main">
            <Routes>
                <Route path="/"element={<Home />}/>
                <Route path="/catalog"element={<Product />}/>
                <Route path="/orders"element={<Orders />}/>
                <Route path="/order/:id" element={<OrderDetail/>}/>
            </Routes>
        </main>
        <main className="main">
            <div className="content">

                <ul className="products">
                    <li>
                        <div className="product">
                            <img className="product-image" src="images/d1.jpg" alt="product" />
                            <div className="product-name">
                                <a href="product.html">Slim Shirt</a>
                            </div>
                            <div className="product-brand">Nike</div>
                            <div className="product-price">$60</div>
                            <div className="product-rating">4.5 Stars (10 Reviews)</div>
                        </div>
                    </li>
                    <li>
                        <div className="product">
                            <img className="product-image" src="images/d1.jpg" alt="product" />
                            <div className="product-name">
                                <a href="product.html">Slim Shirt</a>
                            </div>
                            <div className="product-brand">Nike</div>
                            <div className="product-price">$60</div>
                            <div className="product-rating">4.5 Stars (10 Reviews)</div>
                        </div>
                    </li>
                    <li>
                        <div className="product">
                            <img className="product-image" src="images/d1.jpg" alt="product" />
                            <div className="product-name">
                                <a href="product.html">Slim Shirt</a>
                            </div>
                            <div className="product-brand">Nike</div>
                            <div className="product-price">$60</div>
                            <div className="product-rating">4.5 Stars (10 Reviews)</div>
                        </div>
                    </li>
                    <li>
                        <div className="product">
                            <img className="product-image" src="images/d1.jpg" alt="product" />
                            <div className="product-name">
                                <a href="product.html">Slim Shirt</a>
                            </div>
                            <div className="product-brand">Nike</div>
                            <div className="product-price">$60</div>
                            <div className="product-rating">4.5 Stars (10 Reviews)</div>
                        </div>
                    </li>
                    
                </ul>
            </div>   
        </main>

        <footer className="footer">
            &copy; 2025 Destroyed Presence
        </footer>

    </div>
</body> 
</div>
  );
}

export default App;
