import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";

//components
import Dashboard from "./dashboard/dashboard";
import SignUp from "./signup/signUp";
import Login from "./login/login";

function App() {
  return (
    <Router>
      <div id="routing-container">
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
      </div>
    </Router>
  );
}

export default App;
