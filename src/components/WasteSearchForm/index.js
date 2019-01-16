import React from 'react';
import './WasteSearchForm.css';
import magnifyingGlass from './icons8-search-60.png';

const WasteSearchForm = ({onButtonSubmit, handleChange}) => {
  return (
    <form className="form" type="submit" onSubmit={onButtonSubmit}>
      <label htmlFor="search" className="visuallyhidden">
        Search: 
      </label>
      <input
        type="text"
        placeholder="Enter a keyword"
        required
        onChange={handleChange}
      />
      <button className="grow shadow-5" aria-label="searchbutton">
        <img src={magnifyingGlass} alt="magnifyingGlass" />
      </button>
    </form>
  );
};

export default WasteSearchForm;
