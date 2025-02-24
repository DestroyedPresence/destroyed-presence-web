import React from "react";
import "./style.css"; // Ensure this CSS file is inside "src" or properly imported

function App() {
  // Sidebar menu functions
  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  };

  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  };

  return (
    <div className="grid-container">
      <header className="header">
        <div className="brand">
          <button onClick={openMenu}>&#9776;</button>
          <a href="/">Destroyed Presence</a>
        </div>
        <div className="header-links">
          <a href="/cart">Cart</a>
          <a href="/signin">Sign In</a>
        </div>
      </header>

      <aside className="sidebar">
        <h3>Shopping Categories</h3>
        <button className="sidebar-close-button" onClick={closeMenu}>
          x
        </button>
        <ul>
          <li>
            <a href="/">Pants</a>
          </li>
          <li>
            <a href="/">Shirts</a>
          </li>
        </ul>
      </aside>

      <main className="main">
        <div className="content">
          <ul className="products">
            {[
              { id: 1, name: "Slim Shirt", brand: "Nike", price: "$60", rating: "4.5 Stars (10 Reviews)", image: "images/d1.jpg" },
              { id: 2, name: "Slim Shirt", brand: "Nike", price: "$60", rating: "4.5 Stars (10 Reviews)", image: "images/d1.jpg" },
              { id: 3, name: "Slim Shirt", brand: "Nike", price: "$60", rating: "4.5 Stars (10 Reviews)", image: "images/d1.jpg" },
              { id: 4, name: "Slim Shirt", brand: "Nike", price: "$60", rating: "4.5 Stars (10 Reviews)", image: "images/d1.jpg" },
            ].map((product) => (
              <li key={product.id}>
                <div className="product">
                  <img className="product-image" src={product.image} alt={product.name} />
                  <div className="product-name">
                    <a href="/product">{product.name}</a>
                  </div>
                  <div className="product-brand">{product.brand}</div>
                  <div className="product-price">{product.price}</div>
                  <div className="product-rating">{product.rating}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </main>

      <footer className="footer">&copy; 2025 Destroyed Presence</footer>
    </div>
  );
}

export default App;

