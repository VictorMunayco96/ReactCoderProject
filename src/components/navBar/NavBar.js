
import React from 'react'


const NavBar = () => {
    return (
        

<nav class="navbar navbar-expand-sm navbar-dark bg-dark">
  <div class="container">
    <a class="navbar-brand" href="#">Logo</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="mynavbar">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <a class="nav-link" href="javascript:void(0)">Inicio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="javascript:void(0)">Oferta</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="javascript:void(0)">Tienda</a>
        </li>
      </ul>
    
    </div>
  </div>
</nav>
  
      
     
    )
}

export default NavBar
