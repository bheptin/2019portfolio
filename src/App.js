import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import './css/menu.css';
import Home from './components/Home.js';
import About from './components/About.js';
import Work from './components/Work.js';
import { elastic as Menu } from 'react-burger-menu';

const routes = [
  {
    path: "/",
    exact: true,
    main: Home
  },
  {
    path: "/about",
    main: About
  },
  {
    path: "/work",
    main: Work
  }
];


class App extends Component {
  showSettings (event) {
    event.preventDefault();
  }
  render() {
    
    return (
        <Router>
          <Menu>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/work">Work</Link>
              </li>
              <li className="info-email">
                <a href="mailto: bheptin@gmail.com?Subject=I%20have%20an%20amazing%20job%20offer%20for%20you!">
                  <i className="fa fa-envelope-square fa-2x"></i>
                </a>
              </li>
              <li className="info-resume">
                <a href="https://drive.google.com/open?id=1sqSFo-XKRkCfgfApz5s5DpcPM7-Mch-bp-9nu-zuEl8">
                  <i className="fa fa-file fa-2x"></i>
                </a>
              </li>
            </ul>
            
              {routes.map((route, index) => (
                // You can render a <Route> in as many places
                // as you want in your app. It will render along
                // with any other <Route>s that also match the URL.
                // So, a sidebar or breadcrumbs or anything else
                // that requires you to render multiple things
                // in multiple places at the same URL is nothing
                // more than multiple <Route>s.
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={route.sidebar}
                />
              ))}
           
           <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
            </Menu>
            <div style={{ flex: 1 }}>
              {routes.map((route, index) => (
                // Render more <Route>s with the same paths as
                // above, but different components this time.
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={route.main}
                />
              ))}
            </div>
    </Router>
    );
  }
}

export default App;