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
      isLoaded: false,
      wasteItems: []
    }
  }

  onButtonSubmit = (searchQuery) => {
    fetch('https://secure.toronto.ca/cc_sr_v1/data/swm_waste_wizard_APR?limit=1000')
    .then(response=> response.json())
    .then(json => {
      this.setState({ isLoaded: true, wasteItems: json.filter(item => item.keywords.indexOf(searchQuery) !== -1)})
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    });
  }

  clearWasteItems = () => {
    this.setState({ wasteItems: [] });
  }

  handleChange = (event) => {
    this.setState({keyword: event.target.value});
    if (!event.target.value) {
      this.props.onButtonSubmit('');
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
          clearWasteItems={this.clearWasteItems}
        />
        <WasteCardList 
          wasteItems={this.state.wasteItems}
        />
        <FavouritesCardList />
      </div>
    );  
  }
}

export default App;
