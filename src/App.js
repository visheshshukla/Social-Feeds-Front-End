import React, { Component, Fragment } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

import SinglePostPage from './pages/Feed/SinglePost/SinglePost';
import './App.css';

class App extends Component {
routes = (
        <Switch>
          <Route
            path="/"
            exact
            render={props => (
              <FeedPage userId={this.state.userId} token={this.state.token} />
            )}
          />
          <Route
            path="/:postId"
            render={props => (
              <SinglePostPage
                {...props}
                userId={this.state.userId}
                token={this.state.token}
              />
            )}
          />
          <Redirect to="/" />
        </Switch>
    );
    return (
      <Fragment>
        {routes}
      </Fragment>
    );
  }
}

export default withRouter(App);
