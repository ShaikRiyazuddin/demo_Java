// import jss from "jss";
import React from "react";
import { makeStyles } from '@material-ui/core/styles';
// import Reg from "./view/forms/Reg";
 import Contact from "./view/forms/Contact";
// import { styles } from "./assets/styles/styles";
// import Autocomplete from "./common/components/Autocomplete";
import { Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }
}));

function App(){
  const classes = useStyles();
    // const { classes } = jss.createStyleSheet(styles).attach();
  return (
    <div>
      {/* <Reg classes={classes} />
      <Autocomplete />
      <Contact /> */}
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Paper className={classes.paper}></Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
          </Paper>
        </Grid>
        <Grid item xs={9}>
          <Paper className={classes.paper}>
            <Contact/>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
export default App;
