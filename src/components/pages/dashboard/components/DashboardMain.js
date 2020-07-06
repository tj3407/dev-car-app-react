import React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

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

export default function DashboardMain() {
    const classes = useStyles();
    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Grid item xs={12} className={classes.mainHeader}>
                <h4 style={{ color: "black" }}>Header</h4>
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
