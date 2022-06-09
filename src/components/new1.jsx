import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  Input,
  Button,
  TextField,
  FormHelperText,
  AppBar,
  Toolbar,
  Typography,
  IconButton
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(1)
  },
  title: {
    flexGrow: 1
  }
}));

function ContactAppBar() {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        {/* <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton> */}
        <Typography variant="h6" className={classes.title}>
          Contact Form
        </Typography>
        {/* <Button color="inherit">Login</Button> */}
      </Toolbar>
    </AppBar>
  );
}

export default function Contact() {
  const [lnErrors, setLnErrors] = useState({
    error: false,
    errorMesg: ""
  });
  const [formValues, setFormValues] = useState({
    lastName: "",
    firstName: "",
    email: "",
    comments: ""
  });

  const handleSubmit = event => {
    console.log("handle submit");
  };

  const handleChange = e => {
    let value = e.target.value;
    setFormValues({ ...formValues, lastName: value });
    if (value.length > 6) {
      setLnErrors({
        ...lnErrors,
        error: true,
        errorMesg: "Last Name should be lesser then 6 char's"
      });
      setFormValues({
        ...formValues,
        lastName: value.substring(0, 6)
      });
    } else {
      setLnErrors({
        ...lnErrors,
        error: false,
        errorMesg: ""
      });
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        margin: 20,
        padding: 20
      }}
    >
      <form style={{ width: "50%" }} onSubmit={handleSubmit}>
        <ContactAppBar />
        <TextField
          error={lnErrors.error}
          helperText={lnErrors.errorMesg}
          required={true}
          id={"lname"}
          label="Name"
          fullWidth={true}
          value={formValues.lastName}
          onChange={handleChange}
          InputProps={{ min: 0, max: 10 }}
        />
        <FormControl margin="normal" fullWidth>
          <InputLabel htmlFor="email">Email</InputLabel>
          <Input id="email" type="email" />
          <FormHelperText id="my-helper-text">
            We'll never share your email.
          </FormHelperText>
        </FormControl>

        <FormControl margin="normal" fullWidth>
          <InputLabel htmlFor="email">Comments</InputLabel>
          <Input id="email" multiline rows={10} />
        </FormControl>

        <Button type="submit" variant="contained" color="primary" size="medium">
          Send
        </Button>
      </form>
    </div>
  );
}
