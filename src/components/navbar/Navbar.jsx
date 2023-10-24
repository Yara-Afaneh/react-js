import React from 'react'
import'./Navbar.css';

export default function Navbar() {
  return (
    <>
<nav className="navbar navbar-expand-lg justify-content-center">
  <div className="container text-white">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item mx-5">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item mx-5">
          <a className="nav-link" href="#products">Products</a>
        </li>

        <li className="nav-item mx-5">
          <a className="nav-link main-color" href="#footer">Footer</a>
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>

    </>
  )
}
