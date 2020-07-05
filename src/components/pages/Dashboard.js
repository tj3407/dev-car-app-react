import React from "react";
import Button from "@material-ui/core/Button";
import { withOktaAuth } from "@okta/okta-react";

function Dashboard(props) {
  console.log("rendering dashboard", props);
  const handleClick = () => {
      props.authService.logout();
  };

  return (
    <div>
      Dashboard
      <Button
        color="primary"
        onClick={handleClick}
        variant="contained"
        disableElevation
      >
        Logout
      </Button>
    </div>
  );
}

export default withOktaAuth(Dashboard);
