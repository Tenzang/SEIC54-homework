import { toHaveAccessibleDescription } from '@testing-library/jest-dom/dist/matchers';
import React, { Component } from 'react';
import './SearchBar.css'


const yelpURL = 'https://api.yelp.com/v3/businesses/search';



class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            term: '',
            location: '',
            sortBy: 'best_match'
        }

        this.handleTermChange = this.handleTermChange.bind(this)
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this)
        
         this.sortByOptions = {
            'Best Match': 'best_match',
            'Highest Rated': 'rating',
            'Most Viewed': 'review_count'
        }
    }

    getSortByClass(sortByOption){
        if (this.state.sortBy === sortByOption){
            return 'active'
        } 
        return ''
    }

    handleSortByChange(sortByOption){
        this.setState({sortBy: sortByOption})
    }

    handleTermChange(event){    //////
        this.setState({term: event.target.value})
    }

    handleLocationChange(event){   /////////
        this.setState({location: event.target.value})
    }

    renderSortByOptions() {
        return ( // Return
            Object.keys(this.sortByOptions).map(option => { //  Map through every item key that pops up 
                let sortByOptionValue = this.sortByOptions[option]; // grab the value of every key and store it in this variable
                return (<li 
                className={ this.getSortByClass(sortByOptionValue) } 
                onClick ={ this.handleSortByChange.bind(this, sortByOptionValue)}
                key={sortByOptionValue}> {option} </li>) // and create a list item for every option 
            })
        );
    }

    handleSearch(event){
        event.preventDefault();
        this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
    }
    
    render(){
        return (
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>
                        { this.renderSortByOptions() }
                    </ul>
                </div>
                <div className="SearchBar-fields">
                    <input onChange={ this.handleTermChange }placeholder="Search Business" />
                    <input onChange={ this.handleLocationChange }placeholder="Where?" />
                </div>
                <div className="SearchBar-submit">
                    <a onClick={ this.handleSearch }>Let's Go</a>
                </div>
            </div>
        );
    }
}

export default SearchBar