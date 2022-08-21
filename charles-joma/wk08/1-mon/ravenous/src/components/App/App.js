
import React, { Component } from "react";
import './App.css'
import BusinessList from "../BusinessList/BusinessList";
import SearchBar from "../SearchBar/SearchBar";
import Yelp from "../../util/Yelp";


// const business = {
//   imagesrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
//   name: 'MarginOtto Pizzeria',
//   address: '1010 Paddington Way',
//   city: 'Falvortown',
//   state: 'NY',
//   zipCode: '10101',
//   category: 'italian',
//   rating: 4.5,
//   reviewCount: 90
// };

// const businesses = [
//   business,
//   business,
//   business,
//   business,
//   business,
//   business
// ];

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      business: []
    };

    this.searchYelp = this.searchYelp.bind(this)
  }

  searchYelp(term, location, sortBy){
    Yelp.search(term, location, sortBy).then(businesses => {
      this.setState({business: businesses})
    })
  }

  render(){
    return (
      <div className="App">
      <h1>Ravenous</h1>
    
      <SearchBar searchYelp={this.searchYelp}/>
      <BusinessList business={this.state.business}/>
      </div>
    );
  }
}

export default App;
