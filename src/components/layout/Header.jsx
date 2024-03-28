import React from "react";
import { Link } from "react-router-dom";
import '../CSS/Header.css'
import DarkLight from "../Dark-Ligth";
const Header = ()=>{
    return(
        <>
        <nav className="nav-header">
            <h1>Portifólio</h1>
            <ul className="ul-header">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/'>Galery</Link></li>
                <li><Link to='/'>Abount</Link></li>
            </ul>
            <div className="theme-header">
            <DarkLight/>
            </div>
        </nav>
        </>
    )
}

export default Header;

