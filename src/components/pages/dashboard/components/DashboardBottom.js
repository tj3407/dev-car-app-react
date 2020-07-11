import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import BatteryChargingFullIcon from "@material-ui/icons/BatteryChargingFull";
import RoomIcon from "@material-ui/icons/Room";
import LockIcon from "@material-ui/icons/Lock";
import SpeedIcon from "@material-ui/icons/Speed";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles({
  root: {
    position: "fixed",
    bottom: 0,
    width: "100%"
  },
});

function DashboardBottom() {
  const classes = useStyles();
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <React.Fragment>
        <Hidden smUp implementation="css">
            <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
            <BottomNavigationAction label="Battery" value="battery" icon={<BatteryChargingFullIcon />} />
            <BottomNavigationAction label="Location" value="location" icon={<RoomIcon />} />
            <BottomNavigationAction label="Lock/Unlock" value="lock-unlock" icon={<LockIcon />} />
            <BottomNavigationAction label="Odometer" value="odometer" icon={<SpeedIcon />} />
            <BottomNavigationAction label="Tires" value="tires" icon={<DonutLargeIcon />} />
            </BottomNavigation>
        </Hidden>
    </React.Fragment>
  );
}

export default DashboardBottom;