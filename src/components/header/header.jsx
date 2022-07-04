import React, { useState, useRef } from 'react';
import header from './header.module.css';

const Header = ({ onSubmit }) => {
  const searchInput = useRef();
  const handleOnSubmit = (event) => {
    onSubmit(event, searchInput.current.value);
    searchInput.current.value = '';
  };

  return (
    <header className={header.header}>
      <a className={header.logo} href="#">
        <img src="../../../images/logo.png" alt="logo"></img>
        <span>Youtube</span>
      </a>
      <form className={header.search} onSubmit={handleOnSubmit}>
        <input
          ref={searchInput}
          className={header.input}
          type="text"
          placeholder="Search..."
        />
        <button type="submit" className={header.btn}>
          <img src="../../../images/search.png" alt="search" />
        </button>
      </form>
    </header>
  );
};

export default Header;
