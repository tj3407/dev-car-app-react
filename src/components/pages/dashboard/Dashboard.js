import React from "react";
import { withOktaAuth } from "@okta/okta-react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import DashboardSidebar from "./components/DashboardSidebar";
import DashboardHeader from "./components/DashboardHeader";
import DashboardMain from "./components/DashboardMain";
import { makeStyles } from "@material-ui/core/styles";
import { UserContext } from "../../../context/user-context";
import DashboardBottom from "./components/DashboardBottom";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function Dashboard() {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
      <div className={classes.root}>
        <CssBaseline />
        <nav className={classes.drawer} aria-label="profile sidebar">
          <DashboardSidebar
            mobileOpen={mobileOpen}
            handleDrawerToggle={handleDrawerToggle}
          />
        </nav>
        <Grid container direction="column">
          <DashboardHeader
            mobileOpen={mobileOpen}
            handleDrawerToggle={handleDrawerToggle}
          />
          <DashboardMain />
          <DashboardBottom />
        </Grid>
      </div>
  );
}

export default withOktaAuth(Dashboard);
