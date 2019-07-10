import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../css/App.css';
import '../css/menu.css';
import Home from './Home.js';
import About from './About.js';
import Work from './Work.js';
import { stack as Menu } from 'react-burger-menu';

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
  constructor (props) {
    super(props)
    this.state = {
      menuOpen: false
    }
  }

  handleStateChange (state) {
    this.setState({menuOpen: state.isOpen})  
  }

  closeMenu () {
    this.setState({menuOpen: false})
  }

  render() {
    
    return (
        <Router>
          <Menu width={180} 
                isOpen={this.state.menuOpen}
                onStateChange={(state) => this.handleStateChange(state)}
          >
            <ul>
              <li onClick={() => this.closeMenu()}>
                <Link to="/">Home</Link>
              </li>
              <li onClick={() => this.closeMenu()}>
                <Link to="/about">About</Link>
              </li>
              <li onClick={() => this.closeMenu()}>
                <Link to="/work">Work</Link>
              </li>
              <li className="info-email">
                <a target="_blank" rel="noopener noreferrer" href="mailto: bheptin@gmail.com?Subject=I%20have%20an%20amazing%20job%20offer%20for%20you!">
                  <i className="fa fa-envelope-square fa-2x"></i>
                </a>
              </li>
              <li className="info-resume">
                <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1PLTc8eiX5N_XUMCv2i9LDLS9vi_knzhk/view?usp=sharing">
                  <i className="fa fa-file fa-2x"></i>
                </a>
              </li>
              <li className="info-linkedIn">
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/bheptin/">
                <i className="fa fa-linkedin-square fa-2x" aria-hidden="true"></i>
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