import React from 'react'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton';
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Smartcar from '@smartcar/auth';

const useStyles = makeStyles((theme) => ({
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
  },
  card: {
    margin: theme.spacing(6),
    [theme.breakpoints.down('sm')]: {
        margin: theme.spacing(2),
    },
  },
  mainHeader: {
    padding: theme.spacing(6),
    background: "#fff",
    [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(2),
    },
  }
}));

export default function DashboardMain({ userData }) {
    const classes = useStyles();

    React.useEffect(() => {
        console.log(userData)
    })

    const smartcar = new Smartcar({
        clientId: process.env.REACT_APP_CLIENT_ID,
        redirectUri: 'https://javascript-sdk.smartcar.com/v2/redirect?app_origin=http://localhost:3000',
        scope: ['required:read_vehicle_info'],
        testMode: true,
        onComplete: onComplete,
    });

    function onComplete(err, code, status) {
        userData.updateScCode(code);
    }

    function authorize() {
        smartcar.openDialog({forcePrompt: true});
    }

    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Grid item xs={12} className={classes.mainHeader}>
                <IconButton onClick={authorize}>
                    <AddBoxOutlinedIcon color="action" />
                </IconButton>
            </Grid>
            <Grid item xs={12}>
                <Card variant="outlined" className={classes.card}>
                    <CardContent>
                        <Typography variant="h1">Car</Typography>
                    </CardContent>
                </Card>
            </Grid>
        </main>
    )
}
