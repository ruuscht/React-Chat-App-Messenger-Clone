import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./styles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Paper from "@material-ui/core/Paper";
import withStyles from "@material-ui/core/styles/withStyles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
const firebase = require("firebase");

class signUp extends Component {
  constructor() {
    super();
    this.state = {
      email: null,
      password: null,
      passwordConfirmation: null,
      signUpError: "",
    };
  }

  render() {
    const { classes } = this.props;
    return (
      <main className={classes.main}>
        <CssBaseline></CssBaseline>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <form onSubmit={(e) => this.submitSignUp(e)} className={classes.form}>
            <FormControl required fullWidth margin="normal">
              <InputLabel htmlFor="signup-email-input">
                Enter Your Email
              </InputLabel>
              <Input
                autoComplete="email"
                onChange={(e) => this.userTyping("email", e)}
                autoFocus
                id="signup-email-input"
              />
            </FormControl>

            <FormControl required fullWidth margin="normal">
              <InputLabel htmlFor="signup-password-input">
                Create Your Password
              </InputLabel>
              <Input
                type="password"
                onChange={(e) => this.userTyping("password", e)}
                id="signup-password-input"
              />
            </FormControl>

            <FormControl required fullWidth margin="normal">
              <InputLabel htmlFor="signup-password-confirmation-input">
                Confirm Your Password
              </InputLabel>
              <Input
                type="password"
                onChange={(e) => this.userTyping("passwordConfirmation", e)}
                id="signup-password-confirmation-input"
              />
            </FormControl>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className={classes.submit}
            >
              Submit
            </Button>
          </form>
          {this.state.signUpError ? (
            <Typography
              className={classes.errorText}
              component="h5"
              varianat="h6"
            >
              {this.state.signUpError}
            </Typography>
          ) : null}
          <Typography
            component="h5"
            varianat="h6"
            className={classes.hasAccountHeader}
          >
            Already Have An Account
          </Typography>
          <Link className={classes.logInLink} to="/login">
            Log In!
          </Link>
        </Paper>
      </main>
    );
  }

  formIsValid = () => this.state.password === this.state.passwordConfirmation;

  userTyping = (type, e) => {
    switch (type) {
      case "email":
        this.setState({ email: e.target.value });
        break;
      case "password":
        this.setState({ password: e.target.value });
        break;
      case "passwordConfirmation":
        this.setState({ passwordConfirmation: e.target.value });
        break;

      default:
        break;
    }
  };
  submitSignUp = (e) => {
    e.preventDefault();

    if (!this.formIsValid()) {
      this.setState({ signUpError: "Passwords do not match" });
      return;
    }

    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(
        (authRes) => {
          const userObj = {
            email: authRes.user.email,
          };
          firebase
            .firestore()
            .collection("users")
            .doc(this.state.email)
            .set(userObj)
            .then(
              () => {
                this.props.history.push("/dashboard");
              },
              (dbError) => {
                console.log(dbError);
                this.setState({ signUpError: "Failed to add user" });
              }
            );
        },
        (authError) => {
          console.log(authError);
          this.setState({ signUpError: "Failed to add user" });
        }
      );
  };
}

export default withStyles(styles)(signUp);
