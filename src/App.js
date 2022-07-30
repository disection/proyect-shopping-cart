import { Link, Routes, Route } from "react-router-dom";
import './App.css';
import Products from "./Pages/Products";
import ProductsRegister from "./Pages/ProductsRegister";
import ShoppingCart from "./Pages/ShoppingCart";
import ShoppingHistory from "./Pages/ShoppingHistory";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-12 col">
            <nav class="navbar navbar-expand-lg bg-ligt">
              <div className="container-fluid">
                <a class="navbar-brand" href="/">Shopping Card</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                  <ul class="navbar-nav">
                    <li class="nav-item">
                      <Link to="/products" class="nav-link ">Productos</Link>
                    </li>
                    <li class="nav-item">
                      <Link to="/products-register" class="nav-link" >Agregar Productos</Link>
                    </li>
                    <li class="nav-item">
                      <Link to="/shopping-history" class="nav-link" >Historial de compra</Link>
                    </li>
                    <li class="nav-item">
                      <Link to="/shopping-cart" class="nav-link" >Carrito de compras</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            <main className='container'>
              <div className="row">
                
                <div className="col-6">
                  <Routes>
                    <Route path="/" element={<h1>Bienvenidos a la Shopping Cart</h1>} />
                    <Route path="products" element={<Products/>} />
                    <Route path="products-register" element={<ProductsRegister />} />
                    <Route path="shopping-history" element={<ShoppingHistory />} />
                    <Route path="shopping-cart" element={<ShoppingCart />} />                    
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
