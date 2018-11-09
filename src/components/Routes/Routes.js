import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../../pages/Home/Home';
import Dashboard from '../../pages/dashboard/Dashboard';

class Routes extends Component {
    render() {
        return (
            <div className="container">
                <Switch>
                    <Route exact path="/" component={ Home } />
                    <Route path="/dashboard" component={ Dashboard } />
                </Switch>
            </div>
        )
    }
}

export default Routes;
