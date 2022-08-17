import React, { Component } from 'react';
import axios from 'axios';

import SearchForm from './SearchForm';
import Gallery from './Gallery';

class NASASearch extends Component {
    constructor() {
        super();
        this.fetchImages = this.fetchImages.bind(this);
        this.state = {
            images: []
        };
    }

    fetchImages(q) {
        // const generateURL = function (p) {
        //     return
        // }

        const NASAURL = `https://images-api.nasa.gov/search`;

        const config = {
            params: {
                q: q
            },
        };

        axios(NASAURL, config).then((response) => {
            console.log(response);
            // debugger

            const images = (response.data.collection.items).map((p) => {
               return p.links[0].href 
            });

            debugger

            this.setState({images: images});
        });
    }

    render () {
        return (
            <div>
                <h1>NASA Image and Video Search</h1>
                <SearchForm onSubmit={ this.fetchImages } />
                <Gallery images={ this.state.images } />
            </div>
        );
    }
}

export default NASASearch;

// const generateURL = function (p) {
//     return [

//     ]
// };

// const NASAParams = {
//     api_key: 'ccqlk7b0LDozOblSrslaMfeA0WhhV4aNogE9xwFQ'
// };