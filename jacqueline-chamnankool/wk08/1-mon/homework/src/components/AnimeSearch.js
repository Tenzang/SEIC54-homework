import React, { Component } from "react";
import axios from "axios"; // npm install axios
import SearchForm from "./SearchForm.js";

class AnimeSearch extends Component {
    constructor() {
        super();
        this.fetchFact = this.fetchFact.bind(this);
        this.state = {
            fact: ""
        };
    }

    fetchFact(title) {
        console.log("Searching for anime", title);
        const animeURL = `https://anime-facts-rest-api.herokuapp.com/api/v1/${title.toLowerCase()}`;

        axios(animeURL).then((response) => {
            const randomIndex = Math.floor(Math.random() * response.data.data.length+1);
            this.setState(response.data.data[randomIndex]);
        });
    }

    render() {
        return (
            <SearchForm onSubmit={this.fetchFact} fact={this.state.fact} />
        );
    }
}

export default AnimeSearch;