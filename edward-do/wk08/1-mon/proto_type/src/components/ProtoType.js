import React, { Component } from 'react';
import axios from 'axios';

import Typer from './Typer';

class ProtoType extends Component {
    constructor() {
        super();
        this.state = {
            quote: ''
        };
    }
    

    render () {
        return (
            <div>
                <h1>ProtoType</h1>
                <Typer />
            </div>
        );
    };
};

export default ProtoType