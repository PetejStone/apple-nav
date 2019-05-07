import React from 'react';
import { Route, Link, NavLink} from 'react-router-dom';
import './Nav.css';
const Nav = props => {
    return (
       
        <div className="nav">
            <NavLink exact to="/mac">Mac</NavLink>
            <NavLink to="/ipad">iPad</NavLink>
            <NavLink to="/iphone">iPhone</NavLink>
            <NavLink to="/watch">Watch</NavLink>
            <NavLink to="/tv">TV</NavLink>
            <NavLink to="/music">Music</NavLink>
            <NavLink to="/support">Support</NavLink>
        </div>
        
    )
}

export default Nav;