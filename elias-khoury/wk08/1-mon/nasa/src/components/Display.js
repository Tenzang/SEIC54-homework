import React from "react";

const Display = (props) => {
    console.log(props);
    return (
        <div>
            <h1>{props.title}</h1>
            <img src={props.picture} alt="" />
        </div>
    );
};
export default Display;
