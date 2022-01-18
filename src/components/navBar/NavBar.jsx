import React from "react";
import { Cart } from 'react-bootstrap-icons';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#">
          Cursemy
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mynavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mynavbar">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Oferta
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Tienda
              </a>
            </li>
          </ul>
        </div>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4"></ul>
          <form class="d-flex col-lg-2 text-white">¡Adquiere tu Primer Curso!  </form>

          <button 
            type="button"
            class="btn btn-danger pd-2"
            onclick="mostrarProductosCarrito()"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            <Cart/>
            Carrito
          </button>
        </div>

      </div>
    </nav>
  );
};

export default NavBar;
