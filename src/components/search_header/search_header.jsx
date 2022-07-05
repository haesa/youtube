import React, { useRef } from 'react';
import styles from './search_header.module.css';

const SearchHeader = ({ onSearch }) => {
  const inputRef = useRef();
  const handleSearch = (event) => {
    onSearch(event, inputRef.current.value);
    inputRef.current.value = '';
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img className={styles.img} src="/images/logo.png" alt="logo" />
        <h1 className={styles.title}>Youtube</h1>
      </div>
      <form className={styles.search} onSubmit={handleSearch}>
        <input
          ref={inputRef}
          className={styles.input}
          type="search"
          placeholder="Search..."
        />
        <button className={styles.button}>
          <img
            className={styles.buttonImg}
            src="/images/search.png"
            alt="search"
          />
        </button>
      </form>
    </header>
  );
};

export default SearchHeader;
