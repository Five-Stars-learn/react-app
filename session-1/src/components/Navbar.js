import React from 'react';  
import { Link } from "react-router-dom"
import Logo from "./Logo"
import { useSelector } from 'react-redux';

const Navbar = () => {
  const cart = useSelector(state => state.cart);

  return (
    <>
    <nav className="navbar fixed='top' navbar-expand-lg bg-light">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/logo">
        <Logo/>
        </Link>
      <button 
      className="navbar-toggler" 
      type="button" 
      data-bs-toggle="collapse" 
      data-bs-target="#navbarSupportedContent" 
      aria-controls="navbarSupportedContent" 
      aria-expanded="false" 
      aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      <li className="nav-item">
      <Link className="nav-link active" aria-current="page" to = {"/"}>
        <h2>Home</h2>
      </Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link active" to ="/about">
        <h2>About </h2>
      </Link>
     </li>
     <li className="nav-item">
      <Link className="nav-link active" to ="/cartApp">
        <h2>CartApp </h2>
      </Link>
     </li>
     <li className="nav-item">
      <Link className="nav-link active" to ="/cart">
        <h2>Cart - {cart.length}</h2>
      </Link>
     </li>
     </ul>
      </div>
    </div>
  </nav>
</>
)
}
  
export default Navbar