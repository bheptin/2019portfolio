import React, { Component } from 'react';
import About from './About.js';
import Work from './Work.js';

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
          <About />
          <Work />
          </div>
            
        )
    }
}

export default Home;