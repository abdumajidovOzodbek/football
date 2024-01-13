import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../../public/img/../img/logo.png'
import './Navbar.css'
const Navbar = () => {
    return (
        <header className='header'>
            <NavLink className='link_logo' to='/'><img src={logo} alt="logo"/><h4>FOOTBALL</h4></NavLink>
           <div className="pages">
            <NavLink className={active=>active.isActive? 'active':'passive'} to='/'>ABOUT TEAMS</NavLink>
            <NavLink className={active=>active.isActive? 'active':'passive'} to='/live'>LIVE SCORE</NavLink>
            <NavLink className={active=>active.isActive? 'active':'passive'} to='/ucl/groupA'>UCL STANDINGS</NavLink>
            <NavLink className={active=>active.isActive? 'active':'passive'} to='/uzb'>UZ</NavLink>
            <NavLink className='logout' to='./login'><i className="fa-solid fa-right-to-bracket"></i></NavLink>
           </div>
        </header>
    );
}

export default Navbar;
