import React, { Component } from "react";
import {
  FormControl,
  InputLabel,
  Input,
  Button,
  Paper,
  withStyles,
  CssBaseline,
  Typography,
} from "@material-ui/core";
import styles from "./styles";
const firebase = require("firebase");

class NewChat extends Component {
  constructor() {
    super();
    this.state = {
      username: null,
      message: null,
    };
  }

  render() {
    const { classes } = this.props;
    return (
      <main className={classes.main}>
        <CssBaseline />
        <Paper className={classes.paper}>
          <Typography className={classes.header} component="h1" variant="h5">
            Send A Message
          </Typography>
          <form
            className={classes.form}
            onSubmit={(e) => this.submitNewChat(e)}
          >
            <FormControl fullWidth>
              <InputLabel htmlFor="new-chat-username">
                Enter Your Friend's Email
              </InputLabel>
              <Input
                required
                className={classes.input}
                onChange={(e) => this.userTyping("username", e)}
                autoFocus
                id="new-chat-username"
              />
            </FormControl>
            <FormControl fullWidth>
              <InputLabel htmlFor="new-chat-message">
                Enter Your Message
              </InputLabel>
              <Input
                required
                className={classes.input}
                onChange={(e) => this.userTyping("message", e)}
                id="new-chat-message"
              />
            </FormControl>
            <Button
              variant="contained"
              fullWidth
              className={classes.submit}
              type="submit"
            >
              Send
            </Button>
          </form>
        </Paper>
      </main>
    );
  }
  userTyping = (type, e) => {
    switch (type) {
      case "username":
        this.setState({ username: e.target.value });
        break;
      case "message":
        this.setState({ message: e.target.value });
        break;
      default:
        break;
    }
  };

  submitNewChat = async (e) => {
    e.preventDefault();
    const userExists = await this.userExists();
    if (userExists) {
      const chatExists = await this.chatExists();
      chatExists ? this.goToChat() : this.createChat();
    }
  };

  createChat = () => {
    this.props.newChatSubmitFn({
      sendTo: this.state.username,
      message: this.state.message,
    });
  };

  goToChat = () => {
    this.props.goToChatFn(this.buildDocKey(), this.state.message);
  };

  buildDocKey = () => {
    return [firebase.auth().currentUser.email, this.state.username]
      .sort()
      .join(":");
  };
  chatExists = async () => {
    const docKey = this.buildDocKey();
    const chat = await firebase
      .firestore()
      .collection("chats")
      .doc(docKey)
      .get();
    console.log(chat.exists);
    return chat.exists;
  };
  userExists = async () => {
    const usersSnapshot = await firebase.firestore().collection("users").get();
    const exists = usersSnapshot.docs
      .map((_doc) => _doc.data().email)
      .includes(this.state.username);
    //this.setState({serverError: !exists})
    return exists;
  };
}

export default withStyles(styles)(NewChat);
