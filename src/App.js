import { Link, Routes, Route } from "react-router-dom";
import './App.css';
import Products from "./Pages/Products";
import ProductDetail from "./Pages/ProductDetail";
import ProductsRegister from "./Pages/ProductsRegister";
import ShoppingCart from "./Pages/ShoppingCart";
import ShoppingHistory from "./Pages/ShoppingHistory";
import { useState } from 'react'


function App() {
  const [shoppingCart, setShoppingCart] = useState('')

  const addToCart = product => {
    setShoppingCart([...shoppingCart, product])
  }


  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className=" col">
            <nav class="navbar navbar-expand-lg bg-ligt">
              <div className="container-fluid">
                <a className="navbar-brand" href="/">Shopping Card</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <Link to="/products" className="nav-link ">Productos</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/products-register" className="nav-link" >Agregar Productos</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/shopping-history" className="nav-link" >Historial de compra</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/shopping-cart" className="nav-link" >Carrito de compras</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            <main className='container'>
              <div className="row">
                
                <div className="col-12">
                  <Routes>
                    <Route path="/" element={<h1>Bienvenidos a la Shopping Cart</h1>} />
                    <Route path="/products" element={<Products addHandler={addToCart}/>} />
                    <Route path="/product-detail/:id" element={<ProductDetail/>} />
                    <Route path="/products-register" element={<ProductsRegister />} />
                    <Route path="/shopping-history" element={<ShoppingHistory />} />
                    <Route path="/shopping-cart" element={<ShoppingCart shoppingCart = {shoppingCart}/>} />                    
                  </Routes>
                </div>
                
              </div>
            </main>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
