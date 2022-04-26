import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import './Header.css';
import { getRessources } from '../../services/api_services';

const Header = () => {
  const [category, setCategories] = useState([]);

  useEffect(() => {
      getRessources("category").then(data => setCategories(data));
  }, [category])
  return (
    <header className=""> 
        <h1><b>MY BLOG</b></h1>
        <p>Welcome to the blog of <span className="">Diane</span></p>

        <Navbar category={category} />
    </header>
  )
}

export default Header