import React from 'react'
import "../Css/Navbar.css";
import Logo from "../Assets/square_Logo.png";
import Profile from "../Assets/boy.png";
const Navbar = () => {
  return (
    <>
        <div className="Navbar">
    <div className="logo">
        <div className="logo_img">
            <img src={Logo} alt="Logo.png" />
        </div>
        <div className="logo_title">
            <h1>Medical Darpan</h1>
        </div>
    </div>
    <div className="links">
        <ul>
            <li>Home</li>
            <li>Products</li>
            <li>Distributors</li>
            <li>Manufacturers</li>
            <li>About Us</li>
            <li>Blog</li>
        </ul>
    </div>
    <div className="Login_Route">
        <div className="login_link">
        <a href="#New">Login</a>
    </div>
    <div className="login_icon">
        <img src={Profile} alt="Profile.png" />
    </div>
    </div>
    </div>
    </>
  )
}

export default Navbar