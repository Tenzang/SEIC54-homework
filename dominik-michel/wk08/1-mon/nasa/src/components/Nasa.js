import React, { Component } from 'react';


const Nasa = ({image})  => {
    return(
        <div>
            <img src={image} /> 
        </div>
    );
};

export default Nasa;