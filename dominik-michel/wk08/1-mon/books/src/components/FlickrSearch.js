
import React, { Component } from 'react';
import axios from 'axios';

import SearchForm from './SearchForm';
import Books from './Books';

class FlickrSearch extends Component {
    constructor() {
        super();
        this.fetchCover = this.fetchCover.bind(this);
        this.state={
            cover: []
        };
    }
    fetchCover(title) {
        console.log('searching flickr for', title);
        const BookURL = 'https://www.googleapis.com/books/v1/volumes?q=title:' + title;
    
        axios(BookURL).then((response) => {
            const cover = response.data.items[0].volumeInfo.imageLinks.thumbnail;
            this.setState({cover: cover});
        });
    }

    render() {
        return (
            <div>
                <h1>Cover Search</h1>
                <SearchForm onSubmit={ this.fetchCover } />
                <Books cover= {this.state.cover} />        
            </div>
        );
    }
}

export default FlickrSearch;
