import React, { Component } from 'react';
import WasteSearchForm from './components/WasteSearchForm/WasteSearchForm';
import WasteCardList from './components/WasteCardList/WasteCardList';
import FavouritesCardList from './components/FavouritesCardList/FavouritesCardList';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      keyword: '',
      favourites: [],
      wasteItems: [],
    }
  }

  onButtonSubmit = (searchQuery) => {
    searchQuery.preventDefault();
    fetch('https://secure.toronto.ca/cc_sr_v1/data/swm_waste_wizard_APR?limit=1000')
    .then(response=> response.json())
    .then(json => {
      this.setState({ wasteItems: json.filter(item => item.keywords.toLowerCase().includes(this.state.keyword.toLowerCase()))})
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    });
  }

  handleChange = (event) => {
    this.setState({keyword: event.target.value});
    if (!event.target.value) {
      this.setState({ wasteItems: [] });
    }
  }

  addFav = (wasteItem) => {
    let favourites = [...this.state.favourites];
    favourites.push(wasteItem);
    this.setState({ favourites });
  }

  removeFav = (wasteItem) => {
    let favourites = this.state.favourites.filter(eachFavourite => eachFavourite.title !== wasteItem.title)
    this.setState({ favourites });
  }

  render() {
    return (
      <div className="App">
        <header className="appHeader" role="banner">
          <p className="headerTitle">Toronto Waste Lookup</p>
        </header>
        <WasteSearchForm 
          onButtonSubmit={this.onButtonSubmit}
          handleChange={this.handleChange}
        />
        <WasteCardList 
          wasteItems={this.state.wasteItems}
          addFav={this.addFav}
          removeFav={this.removeFav}
          favourites={this.state.favourites}
        />        
        <div className="favouritesSection">
          {this.state.favourites.length > 0
            ? (
              <FavouritesCardList 
                wasteItems={this.state.wasteItems}
                removeFav={this.removeFav}
                favourites={this.state.favourites}
              />
            ) : (
              <div className="emptyFavourites pl4 pb3">
                <h1 className='favouritesHeading'>Favourites</h1>
                <h2>No favorites to show</h2>
                <p>Search for waste items and add them to your favorites.</p>
              </div>
            )}
        </div>
      </div>
    );  
  }
}

export default App;
