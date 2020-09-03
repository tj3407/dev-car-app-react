import React from "react";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import BatteryChargingFullIcon from "@material-ui/icons/BatteryChargingFull";
import RoomIcon from "@material-ui/icons/Room";
import LockIcon from "@material-ui/icons/Lock";
import SpeedIcon from "@material-ui/icons/Speed";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import { withOktaAuth } from "@okta/okta-react";

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
  avatar: {
    margin: "auto",
  },
  card: {
    margin: 20,
  },
  sidebar: {
    transition: "all .2s ease-in-out",
    "&:hover": {
      transform: "scale(1.1)",
      // boxShadow: "5px 5px 2px rgba(5, 5, 55, 0.3)"
    },
  },
}));

function DashboardSidebar({
  container,
  mobileOpen,
  handleDrawerToggle,
  authService,
}) {
  const classes = useStyles();

  const handleClick = (event) => {
    const { id } = event.currentTarget;
    if (id === "logout") {
      authService.logout();
    }
  };

  const renderIcon = (name) => {
    switch (name) {
      case "Battery":
        return <BatteryChargingFullIcon />
      case "Location":
        return <RoomIcon />
      case "Lock/Unlock":
        return <LockIcon />
      case "Odometer":
        return <SpeedIcon />
      case "Tires":
        return <DonutLargeIcon />;
      default:
        break;
    }
  };

  const drawer = (
    <div id="card-nav">
      <div className={classes.toolbar} />
      <Divider />
      <Card variant="outlined" className={classes.card}>
        <CardContent>
          <Avatar className={classes.avatar}>H</Avatar>
          <br />
          <small>johndoe@mail.com</small>
        </CardContent>
      </Card>
      <List>
        {["Battery", "Location", "Lock/Unlock", "Odometer", "Tires"].map(
          (text, index) => (
            <ListItem button key={text} className={classes.sidebar}>
              <ListItemIcon>{renderIcon(text)}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          )
        )}
      </List>
      <Divider />
      <List>
        {["Account", "Settings", "Logout"].map((text, index) => (
          <ListItem
            button
            key={text}
            onClick={handleClick}
            className={classes.sidebar}
            id={text.toLowerCase()}
          >
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <React.Fragment>
      <Hidden smUp implementation="css">
        <Drawer
          container={container}
          variant="temporary"
          // anchor={theme.direction === "rtl" ? "right" : "left"}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper,
          }}
          id="drawer"
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open
          id="drawer"
        >
          {drawer}
        </Drawer>
      </Hidden>
    </React.Fragment>
  );
}

export default withOktaAuth(DashboardSidebar);
