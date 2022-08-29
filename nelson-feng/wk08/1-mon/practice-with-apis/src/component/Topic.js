import React from 'react';

const Topic = (dragons) => {
    return(
        <div>
            <form onSubmit ={(event) => {
                console.log(event);
                event.preventDefault();
                dragons.typeHandler(event.target[0].value)
            }}  >
                <input placeholder="Search..." />
                <input type="submit"></input>
                <p>{dragons.blurb}</p>
            </form>
        </div>
    );
};

export default Topic;