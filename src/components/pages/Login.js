import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import SignInWidget from '../auth/SignInWidget';
import { withOktaAuth } from '@okta/okta-react';

export default withOktaAuth(class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: null
    };
  }

  componentDidMount() {
    if (this.state.authenticated === null) {
        console.log('checking auth')
        this.checkAuthentication();
    }
  }

  checkAuthentication() {
    const authenticated = this.props.authState.isAuthenticated;
    console.log('checking authentication', authenticated)
    if (authenticated !== this.state.authenticated) {
      this.setState({ authenticated });
    }
  }

  componentDidUpdate() {
    if (this.state.authenticated === null) {
        this.checkAuthentication();
    }
  }

  onSuccess = (res) => {
      console.log(this.props, this.props.authState)
    if (res.status === 'SUCCESS') {
      return this.props.authService.redirect({
        sessionToken: res.session.token
      });
   } else {
    // The user can be in another authentication state that requires further action.
    // For more information about these states, see:
    //   https://github.com/okta/okta-signin-widget#rendereloptions-success-error
    }
  }

  onError = (err) => {
    console.log('error logging in', err);
  }

  render() {
    if (this.state.authenticated === null) return null;
    return this.state.authenticated ?
      <Redirect to={{ pathname: '/dashboard' }}/> :
      <SignInWidget
        baseUrl={this.props.baseUrl}
        onSuccess={this.onSuccess}
        onError={this.onError}
      />;
  }
});