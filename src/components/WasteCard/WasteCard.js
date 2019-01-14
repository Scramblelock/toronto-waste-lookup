import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';
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

  createMarkup = (encodedHTML) => {
    let parser = new DOMParser();
    let decodedHTML = parser.parseFromString(encodedHTML, 'text/html');
    return {
        __html: decodedHTML.body.textContent
    };
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
          <div dangerouslySetInnerHTML={this.createMarkup(body)}></div>
        </div>
      </div>
    )
  }
}

export default WasteCard; 