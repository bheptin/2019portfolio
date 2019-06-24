import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Home from './components/Home.js';
import About from './components/About.js';
import Work from './components/Work.js';
import Wrong from './components/Wrong.js';

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
  render() {
    return (
      <Router>
      <div className="nav-main">
        <div className="nav-box">
          <ul className="sideNavList">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/work">Work</Link>
            </li>
            <li className="info-phone">
            <i className="fa fa-mobile fa-3x"></i>
            </li>
            <li className="info-email">
            <i class="fa fa-envelope-square fa-2x"></i>
            </li>
            <li className="info-resume">
            <i className="fa fa-file fa-2x"></i>
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
        </div>

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
      </div>
      <Route component={Wrong} />
    </Router>
    );
  }
}

export default App;