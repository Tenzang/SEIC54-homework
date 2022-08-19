import React from "react";

const Info = (props) => {
    return(
        <div>
            {Object.keys(props.pokemon).map((key) => { 
                return <p key={key}><b>{key}</b>: {props.pokemon[key]}</p>
            })}
        </div>
        
    )
}

export default Info;