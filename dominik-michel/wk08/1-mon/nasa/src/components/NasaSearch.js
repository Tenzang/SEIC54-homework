import React, { Component } from 'react';
import axios from 'axios';

import SearchForm from './SearchForm';
import Nasa from './Nasa';

class NasaSearch extends Component {
    constructor(){
        super();
        this.NasaImage = this.NasaImage.bind(this);
        this.state = {
            image: []
        };
    }

    NasaImage(date){
        console.log('searching', date);
        const NasaURL = 'https://api.nasa.gov/planetary/apod?api_key=F2gwKV1Gy3S4Akz3GEDTSU907etaaQ7G5SVQYrBF&date=' + date;
    
        axios(NasaURL).then((response) => {
            const image = response.data.hdurl;
            this.setState({image: image});
        });
    }

    render() {
        return(
            <div>
                <h1>Image Search</h1>
                <SearchForm onSubmit= {this.NasaImage} />
                < Nasa image = {this.state.image} />
            </div>
        );
    }
}

export default NasaSearch;