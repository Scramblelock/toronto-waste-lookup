import React from 'react';
import './WasteSearchForm.css';
import magnifyingGlass from './icons8-search-60.png';

const WasteSearchForm = () => {
	return (
		<form className='form'>
      <input 
      	type='text'
      	placeholder='Enter a keyword'
      	required
      />
      <button className='grow shadow-5' type='submit'>
      	<img src={magnifyingGlass} alt='magnifyingGlass'/>
      </button>
    </form>
  );  
}

export default WasteSearchForm;
