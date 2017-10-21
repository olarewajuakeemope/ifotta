import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import About from './components/About';
import ErrorPage from './components/Error';
import Hire from './components/Hire';
import Home from './components/Home';
import Academy from './components/Academy';
import Client from './components/Client';
import Services from './components/Services';
import Contact from './components/Contact';
import Jobs from './components/Jobs';

export default (

  <Route path="/" component={App} >
    <IndexRoute component={Home} />
    <Route path="/about" component={About} />
    <Route path="/hire" component={Hire} />
    <Route path="/client" component={Client} />
    <Route path="/academy" component={Academy} />
    <Route path="/services" component={Services} />
    <Route path="/contact" component={Contact} />
    <Route path="/jobs" component={Jobs} />
    <Route path="*" component={ErrorPage} />
  </Route>
);
