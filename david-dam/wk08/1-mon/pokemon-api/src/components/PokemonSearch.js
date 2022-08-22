import React, { Component } from "react";
import axios from "axios";
import SearchForm from "./SearchForm";
import Info from "./Info";

class PokemonSearch extends Component {
    constructor() {
        super()
        this.state = ({
            name: [],
            type: [],
            height:[],
            weight:[],
            ability:[],
            ability2:[]
        })
        this.fetchInfo = this.fetchInfo.bind(this);
    }
    fetchInfo(q) {
        console.log(`search for ${q}`) //Testing to see if this search engine works
        const pokemonURL = `https://pokeapi.co/api/v2/pokemon/${q}`;

        axios(pokemonURL).then((results) => {
            console.log(results)
            //Object.keys(results.data) ==> use it on inspection along with debugger then use console.log(name.etc) for referance
            const name = results.data.name;
            const type = results.data.types[0].type.name
            const height = results.data.height;
            const weight = results.data.weight;
            const ability = results.data.abilities[0].ability.name
            const ability2 = results.data.abilities[1].ability.name
            debugger //<==== use this to look into the data
            this.setState({name: name, type: type, height: height, weight: weight, ability: ability, ability2: ability2})
        });
    }

    render() {
        return(
            <div>
                <h1>Pokemon coming soon</h1>
                <SearchForm onSubmit={ this.fetchInfo }/>
                <Info pokemon = { this.state }/>
            </div>
        )
    }
}

export default PokemonSearch