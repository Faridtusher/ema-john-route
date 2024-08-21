// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Header.css';
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom';

const Header = () => {
   return (
      <header>
        <nav className='nav-container'>
            <div className='nav-logo'>
               <img src={logo} alt="" />
            </div>
            <div className='nav-menu'>
               <Link to="/">Shop</Link>
               <Link to="/orders">Order</Link>
               <Link to="/inventory">Inventory</Link>
               {/* <Link to="/login">Login</Link> */}
            </div>
        </nav>
      </header>
   );
};

export default Header;