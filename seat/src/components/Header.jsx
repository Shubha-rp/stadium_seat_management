import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { FaSearch } from 'react-icons/fa';
import './Header.css';
export default function Header() {
  const [searchText, setSearchText] = useState('');

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Search Text:', searchText);
    // Add logic for search functionality
  };

  return (
    <header className='header'>
      <div className='header-container'>
        <Link to='/'>
        <h1 className='header-title header-title-sm'>
          <span>Stadium </span>
          <span>seat</span>
          </h1>
          </Link>
        
        <form className='header-form' >
          <input type='text'
            placeholder='Search...'
            className='header-input header-input-sm'
          />
          <FaSearch className='header-icon' />
        </form>
        <ul className='header-nav'>
            <Link to='/'>
          <li className='header-nav-item header-nav-item-sm'>
            Home
          </li>
          </Link>
          <Link to='/AboutUs'>
          <li className='header-nav-item header-nav-item-sm'>
            About Us
          </li>
          </Link>
          <Link to='/SignUp'>
          <li className='header-nav-item header-nav-item-sm'>
            Sign up
          </li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
