// eslint-disable-next-line no-unused-vars
import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.scss'
const Navbar = () => {
  return (
<>
<nav>
<div className="NavbarImage">
    <img src="https://preview.colorlib.com/theme/wines/images/logo.png.webp" alt="" />
</div>
<div className="NavbarList">
    <ul>
        <li><NavLink to={'/Home'} >Home</NavLink></li>
        <li><NavLink to={'/About'} >About</NavLink></li>
        <li><NavLink to={'/Wishlist'} >WishList</NavLink></li>
        <li><NavLink to={'/admin'} >Admin</NavLink></li>
        <li><NavLink to={'/Basket'} >Basket</NavLink></li>
    </ul>
</div>
</nav>
</>
)
}

export default Navbar