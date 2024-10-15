import React from 'react'
import logo from '../assets/ait logo.png'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <div className="container-fluid position-sticky top-0 z-3">
    <nav className="navbar navbar-expand-lg  abhi">
      <img src={logo} alt="logo" width={200}/>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon bg-light"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <Link to='/'>
        <li className="nav-item me-2 ">HOME </li>
        </Link>
        <Link to='/Fashion'>
        <li className="nav-item me-2">FASHION</li>
        </Link>
        <Link to='/Accessories'>
        <li className="nav-item me-2">ACCESSORIES</li>
        </Link>
        <Link to='/Electronics'>
        <li className="nav-item me-2">ELECTRONICS</li>
        </Link>
        <Link to='/Grocery'>
        <li className="nav-item me-2">GROCERY</li>
        </Link>
      </ul>
    </div>
    </nav>
  </div>
  )
}

export default Navbar