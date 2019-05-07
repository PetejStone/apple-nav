import React from 'react';
import { Route, Link, NavLink} from 'react-router-dom';
import Nav from './Nav';
import SubNav from './SubNav';
import './Nav.css';

const NavWrapper = props => {
    return (
        <div className="nav-wrapper">
            <Nav />
            <SubNav />
           
        </div>
    )
}

export default NavWrapper;