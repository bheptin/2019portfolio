import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


class Navigation extends Component {
    render() {
        return(
            <div className="Navbar-main">
                <NavLink className="navLink" to="/">Home</NavLink>
                <NavLink className="navLink" to="/about">About</NavLink>
                <NavLink className="navLink" to="/work">Work</NavLink>

            </div>
        ); 
    }
}

export default Navigation;