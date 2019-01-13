import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import './WasteCard.css';

class WasteCard extends Component {
  
  handleClick = (event) => {
    if (event.target.classList.contains('starButton--default')) {
      this.props.addFav({
        'title': this.props.title,
        'body': this.props.body
      });
    }
    else {
      this.props.removeFav(this.props.title);
    }
  }

  render() {
    const { title, body, isFavourited } = this.props;
    const buttonClassName = isFavourited ? 'starButton--favourite' : 'starButton--default';
    return (
      <div>
        <div className='wasteCardDetails'>
          <button 
            className={buttonClassName}
            onClick={this.handleClick}
          >
            <FontAwesomeIcon 
              className="faStar" 
              icon={faStar} 
              onClick={this.handleClick}
            />
          </button>
          <p>{title}</p>
          <p>{body}</p>
        </div>
      </div>
    )
  }
}

export default WasteCard; 