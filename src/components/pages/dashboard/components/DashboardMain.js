import React from "react";
import Typography from "@material-ui/core/Typography";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import AddBoxIcon from "@material-ui/icons/AddBox";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Smartcar from "@smartcar/auth";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
  },
  card: {
    margin: theme.spacing(6),
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(2),
    },
  },
  mainHeader: {
    padding: theme.spacing(6),
    background: "#fff",
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(2),
    },
  },
  button: {
    transition: "all .2s ease-in-out",
    outline: "none !important",
    padding: 0,
    "&:hover": {
      transform: "translateY(-3px)",
      backgroundColor: "inherit !important",
    },
  },
  icon: {
    margin: theme.spacing(2),
  },
  addIcon: {
    marginRight: theme.spacing(1),
  },
  headerText: {
    padding: theme.spacing(2),
  },
  iconContainer: {
    width: 60,
    height: 60,
    boxShadow:
      "0 0.46875rem 2.1875rem rgba(59,62,102,.03), 0 0.9375rem 1.40625rem rgba(59,62,102,.03), 0 0.25rem 0.53125rem rgba(59,62,102,.05), 0 0.125rem 0.1875rem rgba(59,62,102,.03)",
  }
}));

export default function DashboardMain({ userData }) {
  const classes = useStyles();

  React.useEffect(() => {
    console.log(userData);
  });

  const smartcar = new Smartcar({
    clientId: process.env.REACT_APP_CLIENT_ID,
    redirectUri:
      "https://javascript-sdk.smartcar.com/v2/redirect?app_origin=http://localhost:3000",
    scope: ["required:read_vehicle_info"],
    testMode: true,
    onComplete: onComplete,
  });

  function onComplete(err, code, status) {
    userData.updateScCode(code);
  }

  function authorize() {
    smartcar.openDialog({ forcePrompt: true });
  }

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="flex-start" className={classes.mainHeader}>
        <Grid item xs={12} sm={4} className={classes.headerText}>
          <Grid
            container
            justify="center"
            alignItems="center"
            className={classes.iconContainer}
          >
            <HomeOutlinedIcon color="primary" />
          </Grid>
        </Grid>
        <Grid item xs={12} sm={4} className={classes.headerText}>
          <Typography variant="h1">Garage</Typography>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Card variant="outlined" className={classes.card}>
          <CardContent>
            <Typography variant="body1" className={classes.headerText}>
              Your garage is currently empty. Add a car to get started.
            </Typography>
            <Button
              variant="contained"
              id="add-car-button"
              disableElevation
              className={classes.icon}
              onClick={authorize}
            >
              <AddBoxIcon className={classes.addIcon} />
              Add Car
            </Button>
          </CardContent>
        </Card>
      </Grid>
    </main>
  );
}
