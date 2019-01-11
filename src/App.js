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
      isLoading: true,
      wasteItems: []
    }
  }

  onButtonSubmit = (event) => {
    // event.preventDefault();
    // this.props.onButtonSubmit(this.state.keyword);
    fetch('https://secure.toronto.ca/cc_sr_v1/data/swm_waste_wizard_APR?limit=1000')
      .then(response=> response.json())
      .then(data => console.log(data))
      .catch(err => console.log(err))
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
        <WasteSearchForm onButtonSubmit={this.onButtonSubmit}/>
        <WasteCardList />
        <FavouritesCardList />
      </div>
    );
  }
}

export default App;
