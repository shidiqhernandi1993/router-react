import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Menu.css';
 
class Menu extends Component {
    render() {
        return (
            <div>
                <header className="header">
                    <a href="https://www.facebook.com/shidiqhernandi.andrian/" className="logo">Shidiq Hernandi Andrian</a>
                    <input className="menu-btn" type="checkbox" id="menu-btn" />
                    <label className="menu-icon" for="menu-btn"><span className="navicon"></span></label>
                    <ul className="menu">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/profile">Profile</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </header>
            </div>
        );
    }
}
 
export default Menu;
