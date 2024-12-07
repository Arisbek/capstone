// src/components/Header.jsx
import React from 'react';
import './Header.css';

const Header = ({ setPage }) => (
    <header>
        <div className="logo">
            <img src="/media/Asset 16@4x.png" alt="Little Lemon Logo" />
        </div>
        <nav className="navbar">
        <ul>
            <li><a href="#" onClick={() => setPage('home')}>Home</a></li>
            <li><a href="#" onClick={() => setPage('order')}>Order</a></li>
            <li><a href="#" onClick={() => setPage('reserve')}>Reserve</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        </nav>
  </header>
);

export default Header;