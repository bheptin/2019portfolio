import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import Home from './components/Home.js';
import About from './components/About.js';
import Work from './components/Work.js';
import Wrong from './components/Wrong.js';
import Navigation from './components/Navigation.js';


class App extends Component {
  render() {
    return (
        <div className="main-body">
            <BrowserRouter>
              <Navigation />
                <Switch>
                  <Route path="/" component={Home} exact/>
                  <Route path="/about" component={About} />
                  <Route path="/work" component={Work} />
                  <Route component={Wrong} />
                </Switch>
            </BrowserRouter>
            <About />
            <Work />
        </div>
    );
  }
}

export default App;