import React, {Component} from 'react';
import axios from 'axios';

import Random from './Random';
import Topic from './Topic';

class RandomUser extends Component {
    constructor() {
        super();
        this.getImage = this.getImage.bind(this);
        this.getSubject = this.getSubject.bind(this);
        this.state = {
            img: '',
            name: 'Random',
            surname: 'User',
            phone: '',
            blurb: '',
        };
    }

    getImage() {
        console.log('getting Image')
        axios('https://randomuser.me/api/').then((response) => {
            console.log(response);
            const image = response.data.results[0].picture.large;
            const name = response.data.results[0].name.first;
            const surname = response.data.results[0].name.last;
            const mobile = response.data.results[0].phone;
            this.setState({img: image, name: name, surname: surname, phone: 'Mobile: ' + mobile});
        });
    };

    getSubject(subject) {
        console.log('getting subject')
        axios(`https://en.wikipedia.org/api/rest_v1/page/summary/${subject}`).then((response) => {
        console.log(response);
        const blurb = response.data.extract;
        this.setState({blurb: blurb})
        });
    };

    render () {
        return (
            <div>
            <h1>{`${this.state.name} ${this.state.surname}`}</h1>
            < Random clickHandler={this.getImage} profileImage={this.state.img} contact={this.state.phone} />
            <h2>Now that you have a new fake identity. Search for cool conversation starter!</h2>
            <Topic typeHandler={this.getSubject} blurb={this.state.blurb}/>
            </div>
        );
    };
};





export default RandomUser