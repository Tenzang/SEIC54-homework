import React, { Component } from 'react';


const Books = ({cover})  => {
    return(
        <div>
            <img src={cover} /> 
        </div>
    );
};

export default Books;