import React, { Component, Fragment } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

import SinglePostPage from './pages/Feed/SinglePost/SinglePost';
import './App.css';

class App extends Component {
  
  render() {
    let routes = (
      <Switch>
        <Route
          path="/"
          exact
          render={props => (
            <SinglePostPage
            />
          )}
        />
      </Switch>
    );
    return (
        {routes}
      </Fragment>
    );
  }
}

export default withRouter(App);
