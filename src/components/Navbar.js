import React from "react";
import { NavLink, Link } from "react-router-dom";
import '../styles/Navbar.css';
import cartImage from '../images/image17.png'

const Navbar = () => {
    return (
        <nav className="navBar">
            <Link to='/' className="brandName">ByteBazaar</Link>
            <ul className="buttonContainer">
            <NavLink
              to="/about"
              end
              className={({ isActive }) =>
                isActive ? ' buttons rendered' : ' buttons not-rendered'
              }
            >
              About
            </NavLink>
            <NavLink
              to="/products"
              end
              className={({ isActive }) =>
                isActive ? 'buttons rendered' : 'buttons not-rendered'
              }
            >
              Products
            </NavLink>
            <NavLink
              to="/contact"
              end
              className={({ isActive }) =>
                isActive ? 'buttons rendered' : 'buttons not-rendered'
              }
            >
              Contact
            </NavLink>
            <Link to='/basket'><img src={cartImage} alt='cart shopping' className="cartImage"/></Link>
            </ul>

        </nav>
    )
}

export default Navbar;