import { deepOrange } from "@material-ui/core/colors";

const styles = (theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    height: "calc(100% - 35px)",
    position: "absolute",
    left: "0",
    width: "300px",
    boxShadow: "0px 0px 2px black",
  },
  listItem: {
    cursor: "pointer",
  },
  newChatBtn: {
    borderRadius: "0px",
    backgroundColor: "#27B400",
    color: "white",
  },
  unreadMessage: {
    color: "red",
    position: "absolute",
    top: "0",
    left: "0",
  },
  avatar: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  removeBtn: {
    color: "#FF4219",
    position: "absolute",
    top: "3px",
    right: "5px",
    height: "17px",
    width: "17px",
    zIndex: "100",
  },
});

export default styles;
