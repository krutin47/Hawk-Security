import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Paper, Box } from '@material-ui/core';
import { Link } from '@material-ui/core';


const styles = makeStyles(theme => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(7),
      width: theme.spacing(70),
      height: theme.spacing(77),
    },
    paddingTop: theme.spacing(8),
  },

  paper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#dddddd',
    boxShadow: "2px 2px 6px 0 rgba(0,0,0,0.2)",
    transition: "0.4s",
    "&:hover":{
      boxShadow: "22px 30px 60px 0 rgba(0,0,0,0.2)",
    }
  },   
}));


function Home() {
  const classes = styles();

  return (
    <React.Fragment>
    <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h5" color="inherit">
            <pre>  Hack Security</pre>
          </Typography>
        </Toolbar>
    </AppBar>
    <div className={classes.root} align="center">
      <Paper className={classes.paper}>
        <Box pb={10} pl={5} pr={5}>
          <Typography variant="h4">
            Employee Registration/Login
          </Typography>
        </Box>
        <Box>
          <Link href="#" variant="h5">
            Register/Login
          </Link>
        </Box>
      </Paper>
      <Paper className={classes.paper}>
        <Box pb={10} pl={5} pr={5}>
          <Typography variant="h4">
              Know Who We Are and Connect With Us
          </Typography>
        </Box>
        <Box>
          <Link href="#" variant="h5">
            About Us
          </Link>
        </Box>
      </Paper>
      <Paper className={classes.paper}>
        <Box pb={10} pl={5} pr={5}>
          <Typography variant="h4">
            Admin Login
          </Typography>
        </Box>
        <Box>
          <Link href="#" variant="h5">
            Login
          </Link>
        </Box>
      </Paper>
    </div>
    </React.Fragment>
  );
}


export default Home;