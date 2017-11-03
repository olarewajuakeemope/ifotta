import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import Parse from 'parse';

import { Provider } from 'react-redux';

import 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import routes from './routes';
import registerServiceWorker from './registerServiceWorker';

import configureStore from './store/configureStore';
import './resources/css/ifotta-style.css';

const store = configureStore();
Parse.initialize('myAppId');
Parse.serverURL = 'https://desolate-dusk-79329.herokuapp.com/parse';

ReactDOM.render(
  <MuiThemeProvider >
    <Provider store={store} >
      <Router history={browserHistory} routes={routes} />
    </Provider>
  </MuiThemeProvider >,
  document.getElementById('root'));
registerServiceWorker();
