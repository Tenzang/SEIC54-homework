import React, { Component } from "react";
import Display from "./Display";
import axios from "axios";

class Nasa extends Component {
    constructor() {
        super();
        this.fetchImages = this.fetchImages.bind(this);
        this.state = {
            title: "Title loading",
            picture: "Loading",
            info: "Description coming soon",
        };
    }

    fetchImages() {
        axios(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}`).then((data) => {
            const title = data.data.title;
            const picture = data.data.url;
            const info = data.data.explanation;
            this.setState({ title: title, picture: picture, info: info });
            console.log(data);
        });
    }

    componentDidMount() {
        this.fetchImages();
    }

    render() {
        return (
            <div>
                <h1>Nasa</h1>
                <Display picture={this.state.picture} title={this.state.title} info={this.state.info} />
            </div>
        );
    }
}

export default Nasa;
