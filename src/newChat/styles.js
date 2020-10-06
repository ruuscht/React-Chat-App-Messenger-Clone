const styles = (theme) => ({
  main: {
    width: "auto",
    display: "block", // Fix IE 11 issue.
    marginLeft: theme.spacing() * 3,
    marginRight: theme.spacing() * 3,
    [theme.breakpoints.up(400 + theme.spacing() * 3 * 2)]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  header: {
    color: "grey",
    textAlign: "center",
  },
  paper: {
    padding: `${theme.spacing() * 2}px ${theme.spacing() * 3}px ${
      theme.spacing() * 3
    }px`,
    position: "absolute",
    width: "350px",
    top: "50px",
    left: "calc(50% + 150px - 175px)",
  },
  input: {},
  form: {
    width: "100%",
    marginTop: theme.spacing(),
    color: "#27B400",
  },
  submit: {
    marginTop: theme.spacing() * 3,
    backgroundColor: "#27B400",
  },
  errorText: {
    color: "red",
    textAlign: "center",
  },
});

export default styles;
