import React, { useState } from 'react';
import '../App.css'; // styling ke liye
import { NavLink } from 'react-router';
import { FiShoppingCart } from 'react-icons/fi';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar w-full">
            <div className="logo">MyLogo</div>
            <div className={`nav-links ${isOpen ? 'open' : ''}`}>
                <div><NavLink to="/" className="hover:text-gray-400">Home</NavLink></div>
                <div><NavLink to="/about" className="hover:text-gray-400">About</NavLink></div>
                <div><NavLink to="/products" className="hover:text-gray-400">Products</NavLink></div>
                <div><NavLink to="/contact" className="hover:text-gray-400">Contact</NavLink></div>
                <div><NavLink to="/lonin" className="hover:text-gray-400">Login</NavLink></div>
                <div>
                    <div><NavLink to="/cart" className="hover:text-gray-400 flex"><span className='font-bold'>10</span><FiShoppingCart className='text-2xl' />
                    </NavLink></div>
                </div>
            </div>
            <div className="menu-icon" onClick={toggleMenu}>
                ☰
            </div>
        </nav>
    );
};

export default Header;
