import React from "react";
import { Redirect } from "react-router-dom";
import SignInWidget from "../auth/SignInWidget";
import { withOktaAuth } from "@okta/okta-react";
import Grid from "@material-ui/core/Grid";

function Login({ baseUrl, authState, authService }) {
  const [authenticated, setAuthenticated] = React.useState(null);

  React.useEffect(() => {
    checkAuthentication();
  });

  const checkAuthentication = () => {
    const isAuthenticated = authState.isAuthenticated;
    console.log("checking authentication", isAuthenticated);
    if (authenticated !== isAuthenticated) {
      setAuthenticated(isAuthenticated);
    }
  };

  const onSuccess = (res) => {
    if (res.status === "SUCCESS") {
      return authService.redirect({
        sessionToken: res.session.token,
      });
    } else {
      // The user can be in another authentication state that requires further action.
      // For more information about these states, see:
      //   https://github.com/okta/okta-signin-widget#rendereloptions-success-error
    }
  };

  const onError = (err) => {
    console.log("error logging in", err);
  };

  if (authenticated === null) return null;

  return authenticated ? (
    <Redirect to={{ pathname: "/dashboard" }} />
  ) : (
    <div className="App-login">
        <SignInWidget baseUrl={baseUrl} onSuccess={onSuccess} onError={onError} />
    </div>
  );
}

export default withOktaAuth(Login);
