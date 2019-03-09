import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import './App.css';

import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Menu from '../components/Menu/Menu';

const Home = lazy(() => import('../pages/home/Home'));
const About = lazy(() => import('../pages/about/About'));
const Dashboard = lazy(() => import('../pages/dashboard/Dashboard'));
const Attractions = lazy(() => import('../components/Attractions/Attractions'));
const Contact = lazy(() => import('../pages/contact'));

const App = () => (
  <div className="container-fluid">
    <Router>
      <Suspense fallback={ <div>Carregando...</div> }>
        <header className="header row">
          <Menu />
        </header>

        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/attractions" component={ Attractions } />
          <Route path="/about" component={ About } />
          <Route path="/dashboard" component={ Dashboard } />
          <Route path='/contact' component={ Contact } />
        </Switch>
      </Suspense>
    </Router>
  </div>
);

export default App;
