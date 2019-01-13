import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

import './WasteCard.css';


const WasteCard = ({ title, body }) => {
  return (
    <div>
      <div className='wasteCardDetails'>
        <button className="starButton">
        	<FontAwesomeIcon className="faStar" icon={faStar} />
        </button>
        <p>{title}</p>
      	<p>{body}</p>
      </div>
    </div>
  );
}

export default WasteCard; 