import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button } from '@material-ui/core';

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
  palette: {
    primary: { main: "#ffffff" },
  },
});

const Index = () => <Button color="primary" variant="contained">Home</Button>;
const About = () => <h2>About</h2>;
const Users = () => <h2>Users</h2>;

const AppRouter = () => (
  <Router>
    <MuiThemeProvider theme={theme}>
      <div>
        <h2>My first Apollo app 🚀</h2>
      </div>
      <Route path="/" exact component={Index} />
      <Route path="/about/" component={About} />
      <Route path="/users/" component={Users} />
    </MuiThemeProvider>
  </Router >
);

export default AppRouter;