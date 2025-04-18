import React from 'react';
import logo from './logo.svg';
import './App.css';

import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import Home from "./Home/Home";
import Products from "./Products/Products";
import Orders from "./Orders/Orders";
import OrderDetail from "./Orders/OrderDetails";
import Payment from "./Payment/Payment";

function App() {
  const openMenu = () =>{
    document.querySelector(".sidebar")?.classList.add("open");
  }
  const closeMenu = () =>{
    document.querySelector(".sidebar")?.classList.remove("open");
  }
  return (
    <Router>
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
                      <Link to="/payment">Payment</Link>
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
              <Route path="/" element={<Home />} />
              <Route path="/catalog" element={<Products />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/orders/:id" element={<OrderDetail />} />
              <Route path="/payment" element={<Payment />} />
            </Routes>
        </main>

        <footer className="footer">
            &copy; 2025 Destroyed Presence
        </footer>

    </div>
</body> 
</div>
</Router>
  );
}

export default App;
