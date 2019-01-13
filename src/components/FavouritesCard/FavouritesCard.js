import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const FavouritesCard = () => {
  return (
   <div className='bg-washed-green'>
      <h1 className='green'>Favourites</h1>
      <div className='wasteCardDetails'>
        <button className="starButton bg-washed-green">
        	<FontAwesomeIcon className="faStar" icon={faStar} />
        </button>
        <p>Blue Bin (plastic takeout food and produce containers)</p>
      	<ul>
      		<li>Place this empty item in your <strong>Blue Bin</strong>, though if it is soiled with food, please place it in your <strong>Green Bin</strong></li>
      		<li>Place this empty item in your <strong>Blue Bin</strong>, though if it is soiled with food, please place it in your <strong>Green Bin</strong></li>
      	</ul>
      </div>
    </div>
  );
}

export default FavouritesCard; 