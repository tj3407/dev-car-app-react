import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";
import { Security, SecureRoute, LoginCallback } from "@okta/okta-react";
import Navbar from "./components/layout/Navbar";
import Login from "./components/pages/Login";
import Enroll from "./components/pages/Enroll";
import Dashboard from "./components/pages/Dashboard";

export default withRouter(
  class AppWithRouterAccess extends Component {
    constructor(props) {
      super(props);
      this.onAuthRequired = this.onAuthRequired.bind(this);
    }

    onAuthRequired() {
      this.props.history.push("/login");
    }

    render() {
      return (
        <Security
          issuer="https://dev-180584.okta.com/oauth2/default"
          clientId="0oajcll70QeukeMFF4x6"
          redirectUri={window.location.origin + "/implicit/callback"}
          onAuthRequired={this.onAuthRequired}
          pkce={true}
        >
          <div className="App">
            <Navbar />
            <Route path="/register" exact={true} component={Enroll} />
            <SecureRoute path="/dashboard" exact={true} component={Dashboard} />
            <Route
              path="/"
              exact={true}
              render={() => <Login baseUrl="https://dev-180584.okta.com" />}
            />
            <Route path="/implicit/callback" component={LoginCallback} />
          </div>
        </Security>
      );
    }
  }
);
