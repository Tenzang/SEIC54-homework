import React, { useState } from 'react';

const SearchForm = (props) => {
    const [title, setTitle] = useState("");

    const _handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmit(title);
    }

    const _handleInput = (e) => {
        setTitle(e.target.value);
    };

    return (
        <div>
            <h1>Get anime facts</h1>
            <form onSubmit={_handleSubmit}>
                <input type="search" placeholder="Bleach" onInput={_handleInput} required />
                <input type="submit" value="Get fact" />
            </form>
            <h2>{ props.fact }</h2>
        </div>
    );
};

export default SearchForm;