import React from 'react'
import {NavLink } from 'react-router-dom'
import App from '../App.css';
const Navbar = ()=>{
    return(
        <div className="navbar">
             <NavLink to="/">Home</NavLink>
             <NavLink to="/about">About</NavLink>
             <NavLink to="/blog">Blog</NavLink>
             <NavLink to="/contact">Contact</NavLink>
             <NavLink to="/filter">Filter</NavLink>
             <NavLink to="/login">Login Page</NavLink>


        </div>
    )
}

export default Navbar;