import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './menu.css';

const links = [
    { name: 'Home', path: '/' },
    { name: 'Attractions', path: '/attractions' },
    { name: 'About', path: '/about' },
    { name: 'Dasboard', path: '/dashboard' },
    { name: 'Contact', path: '/contact' },
];

const RenderLink = () => {
    const [path, setPath] = useState('/');

    return links.map(link => (
        <li
            key={link.name}
            className={`nav-item ${path === link.path ? 'active' : null}`}
        >
            <Link
                className='nav-link' to={link.path}
                onClick={() => setPath(link.path)}
            >
                {link.name}
            </Link>
        </li>
    ));
};

const Menu = () => (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <ul className='navbar-nav mr-auto'>
            {RenderLink()}
        </ul>
    </nav>
);

export default Menu
