import React from 'react';
import './Navbar.css';

const Navbar = ({ category }) => {

    
  return (
    <nav>
        <ul className="nav justify-content-end">
            <li className="nav-item">
                <b className="nav-link disabled">Catégories</b>
            </li>
            {category.map(cat => (
                <li key={cat._id} className="nav-item">
                <b className="nav-link active"> {cat.title} </b>
            </li>
            ))}
        </ul>
    </nav>
  )
}

export default Navbar;