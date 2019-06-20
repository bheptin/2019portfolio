import React, { Component } from 'react';
import happyBoy from '../images/happyBoy.png';
import '../css/about.css';

class About extends Component {
    render () {
        return(
            <div className="About">
                <h2>About</h2>
                    <p>Welcome! My name is Brian and I've been passionately learning for the past 4 years. <br></br>
                        I welcome you to take a look around at the things I've been doing with my time. </p>
                        <img className="happyBoy-image" src={happyBoy} />

            </div>
        )
    }
}

export default About;