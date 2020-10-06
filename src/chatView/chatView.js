import React, { Component } from "react";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";

class ChatView extends Component {
  componentDidUpdate = () => {
    const container = document.getElementById("chatview-conatiner");
    if (container) {
      container.scrollTo(0, container.scrollHeight);
    }
  };

  render() {
    const { classes, chat, user } = this.props;

    if (chat === undefined) {
      return <main id="chatview-conatiner" className={classes.content}></main>;
    } else {
      return (
        <div>
          <div className={classes.chatHeader}>
            Your Conversation With{" "}
            {chat.users.filter((_usr) => _usr !== user)[0]}
          </div>
          <main id="chatview-conatiner" className={classes.content}>
            {chat.messages.map((_msg, _index) => {
              return (
                <div
                  key={_index}
                  className={
                    _msg.sender === user ? classes.userSent : classes.friendSent
                  }
                >
                  {_msg.message}
                  <br />
                  {_msg.timestamp}
                </div>
              );
            })}
          </main>
        </div>
      );
    }
  }
}

export default withStyles(styles)(ChatView);
