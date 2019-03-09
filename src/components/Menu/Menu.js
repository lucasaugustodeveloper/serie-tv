import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const links = [
    { name: 'Home', path: '/' },
    { name: 'Attractions', path: '/attractions' },
    { name: 'About', path: '/about' },
    { name: 'Dasboard', path: '/dashboard' },
    { name: 'Contact', path: '/contact' },
]

const getPathName = (pathname, verify) => {
    return pathname === verify ? 'active': '';
}

const renderLink = () => {
    const pathname = window.location.pathname;

    return links.map(link => (
        <li key={link.name} className={ getPathName(pathname, link.path) }>
            <Link to={link.path}>{link.name}</Link>
        </li>
    ));
}

const Menu = props => (
    <Fragment>
        <nav className='navbar navbar-default'>
            <div className='container-fluid'>
                <ul className='nav navbar-nav'>
                    { renderLink() }
                </ul>
            </div>
        </nav>
    </Fragment>
)

export default Menu
