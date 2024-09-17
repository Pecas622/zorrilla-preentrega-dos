import React from 'react';
import './NavBar.css'
import { Link, NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget'; // Asegúrate de que la ruta sea correcta


const NavBar = () => {
    return (
        <header>

            <nav className='navbar'>
                <ul className='menu'>
                    <li className='menu-link'>
                        <NavLink to="/"> Home </NavLink>
                    </li>
                    <li className='menu-link'>
                        <NavLink to="/categoria/Nike"> Nike </NavLink>
                    </li>
                    <li className='menu-link'>
                        <NavLink to="/categoria/Adidas"> Adidas </NavLink>
                    </li>
                    <li className='menu-link'>
                        <NavLink to="/categoria/Joma"> Joma </NavLink>
                    </li>
                </ul>
            </nav>

            <CartWidget />
        </header>
    )
}

export default NavBar;
