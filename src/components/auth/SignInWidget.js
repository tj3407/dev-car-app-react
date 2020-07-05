import React, { Component } from 'react';
import OktaSignIn from '@okta/okta-signin-widget';
import '@okta/okta-signin-widget/dist/css/okta-sign-in.min.css';

class SignInWidget extends Component {
  wrapper = React.createRef();

  componentDidMount() {
    const el = this.wrapper.current;
    this.widget = new OktaSignIn({
      features: {
        registration: true
      },
      baseUrl: this.props.baseUrl,
      authParams: {
        pkce: true
      }
    });
    this.widget.renderEl({el}, this.props.onSuccess, this.props.onError);
  }

  componentWillUnmount() {
    this.widget.remove();
  }

  render() {
    return <div ref={this.wrapper} />;
  }
};

export default SignInWidget