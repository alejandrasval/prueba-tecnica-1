import React from 'react';
import { Link } from "react-router-dom";
import '../styles/Navbar.css';

export const Navbar = () => {

    return (
        <div>
            <div className="header">
                <nav>
                <Link className="link" to="">Inicio</Link>
                <Link className="link" to="/Register">Registro</Link>
                <Link className="link" to="/List">Lista</Link>
                </nav>
            </div>
            <hr/>
        </div>
    )
}

export default Navbar;