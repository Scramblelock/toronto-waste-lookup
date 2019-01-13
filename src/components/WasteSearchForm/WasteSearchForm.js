import React from 'react';
import './WasteSearchForm.css';
import magnifyingGlass from './icons8-search-60.png';

const WasteSearchForm = ({ onButtonSubmit }) => {
	return (
		<form className='form' type='submit' onSubmit={onButtonSubmit}>
      <input 
      	type='text'
      	placeholder='Enter a keyword'
      	required
      />
      <button className='grow shadow-5'>
      	<img src={magnifyingGlass} alt='magnifyingGlass'/>
      </button>
    </form>
  );  
}

export default WasteSearchForm;
