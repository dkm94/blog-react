import React from 'react';
import './Navbar.css';
// import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
        <ul class="nav justify-content-end">
            <li className="nav-item">
                <b className="nav-link disabled">Catégories</b>
            </li>
            <li className="nav-item">
                <b className="nav-link active">Catégorie 1</b>
            </li>
            <li className="nav-item">
                <b className="nav-link">Catégorie 2</b>
            </li>
            <li className="nav-item">
                <b className="nav-link">Catégorie 3</b>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar;