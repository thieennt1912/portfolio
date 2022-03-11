import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.scss';
import { MdClose, MdMenu } from 'react-icons/md';

const Nav = () => {
    const [showNav, setShowNav] = useState(false);
    return (
        <div className="topnav">
            <div
                className="mobile-menu-icon"
                onClick={() => setShowNav(!showNav)}
                role="button"
                onKeyDown={() => setShowNav(!showNav)}
                tabIndex={0}
            >
                <MdMenu />
            </div>
            <div className={!showNav ? 'nav-items hide-item' : 'nav-items'}>
                <div
                    className="close-nav-icon"
                    onClick={() => setShowNav(!showNav)}
                    role="button"
                    onKeyDown={() => setShowNav(!showNav)}
                    tabIndex={0}
                >
                    <MdClose />
                </div>
                <NavLink activeClassName="active1" to="/" exact>Home</NavLink >
                <NavLink activeClassName="active1" to="/about">About</NavLink >
                <NavLink activeClassName="active1" to="/projects">Projects</NavLink >
                <NavLink activeClassName="active1" to="/contact">Contact</NavLink >

            </div>
        </div>
    )
}

export default Nav;