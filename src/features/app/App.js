import React from "react";
import { Router, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import ThemeProvider from "@material-ui/styles/ThemeProvider";

import { AppFrame } from "../../components";
import theme from "./theme";

const useStyles = makeStyles(theme => ({
  appFlex: {
    display: "flex",
    flexDirection: "row"
  },
  appContent: {
    position: "relative",
    paddingTop: "120px",
    paddingBottom: "24px",
    flex: 4,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
}));

const App = ({ history }) => {
  const classes = useStyles();

  return (
    <AppFrame>
      <Router history={history}>
        <ThemeProvider theme={theme}>
          <div className={classes.appFlex}>
            <div className={classes.appContent}>
              <Route exact path="/" component={() => <div>HELLO WORLD!</div>} />
            </div>
          </div>
        </ThemeProvider>
      </Router>
    </AppFrame>
  );
};

export default App;
