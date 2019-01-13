import React, { Component } from 'react';
import WasteSearchForm from './components/WasteSearchForm/WasteSearchForm';
import WasteCardList from './components/WasteCardList/WasteCardList';
import FavouritesCardList from './components/FavouritesCardList/FavouritesCardList';
import WasteCard from './components/WasteCard/WasteCard'
import FavouritesCard from './components/FavouritesCard/FavouritesCard'

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      keyword: '',
      favourites: [],
      isLoaded: false,
      wasteItems: []
    }
  }

  onButtonSubmit = (searchQuery) => {
    searchQuery.preventDefault();
    fetch('https://secure.toronto.ca/cc_sr_v1/data/swm_waste_wizard_APR?limit=1000')
    .then(response=> response.json())
    .then(json => {
      this.setState({ isLoaded: true, wasteItems: json.filter(item => item.keywords.toLowerCase().includes(this.state.keyword.toLowerCase()))})
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
  };

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
        />
        <WasteCard />
        <FavouritesCardList />
        <FavouritesCard />
      </div>
    );  
  }
}

export default App;
