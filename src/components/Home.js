import React, { Component } from 'react';
import '../css/home.css';
import trio from '../images/trio.png'

class Home extends Component {
    render() {
        return(
          <div className="App">
            <header className="App-header">
              <p
                className="opening-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Brian Heptinstall... a brief history
              </p>
              
            </header>
            <img className="TrioPic" src={trio} alt="The three of us" />
          </div>
            
        )
    }
}

export default Home;