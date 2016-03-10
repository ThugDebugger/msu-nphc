import React from 'react';
import { Route, IndexRoute  } from 'react-router';
import App from './containers/App/app';
import Home from './containers/Home/home';

export default () => {
  return (
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
    </Route>
  );
};
