import React from 'react';

class Random extends React.Component {
    render () {
        return (
            <div>
                <div>
                    <button onClick={this.props.clickHandler} >Click Here</button>
                </div>
                <div>
                    <img src={this.props.profileImage} alt=''/>
                </div>
                <div>
                    <p>{this.props.contact}</p>
                </div>
            </div>
        );
    };
};


export default Random;