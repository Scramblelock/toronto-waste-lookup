import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import './WasteCard.css';
import Parser from 'html-react-parser';

class WasteCard extends Component {

  handleClick = (event) => {
    (event.target.classList.contains('starButton--default'))
      ? this.props.addFav({
        title: this.props.title,
        body: this.props.body,
      })
      : this.props.removeFav({
        title: this.props.title,
        body: this.props.body,
      });
  };

  render() {
    const {title, body, isFavourited} = this.props;
    const buttonClassName = isFavourited ? 'starButton--favourite' : 'starButton--default';
    return (
      <div>
        <div className="wasteCardDetails">
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
          <div className="wasteBody" dangerouslySetInnerHTML={{__html: Parser(body)}} />
        </div>
      </div>
    );
  }
}

export default WasteCard;
