import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';

import 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import routes from './routes';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <MuiThemeProvider >
    <Router history={browserHistory} routes={routes} />
  </MuiThemeProvider >,
  document.getElementById('root'));
registerServiceWorker();
