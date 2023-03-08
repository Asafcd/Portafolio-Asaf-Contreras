import React from 'react'
import './Navbar.css'

function Navbar(){
    return(
        <header>
        <nav className="nav-wrapper">
          <div className="figure-logo">
            <h1 className="brand-logo">ASAF</h1>
          </div>

          <ul id="nav-mobile" className="nav-options">
            <li>
              <a href="index.html">INICIO</a>
            </li>
            <li>
              <a href="#proyectos">PROYECTOS</a>
            </li>
            <li>
              <a href="index.html">CURRICULUM</a>
            </li>
            <li>
              <a href="index.html">CONTACTO</a>
            </li>
          </ul>
        </nav>
      </header>
    )
}

export default Navbar