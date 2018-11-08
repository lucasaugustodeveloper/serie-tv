import React, { Fragment } from 'react'

const Menu = props => (
    <Fragment>
        <nav className='navbar navbar-default'>
            <div className='container-fluid'>
                <ul className='nav navbar-nav'>
                    <li className="active">
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/">About</a>
                    </li>
                </ul>
            </div>
        </nav>
    </Fragment>
)

export default Menu
