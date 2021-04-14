import React from "react";
import { Dashboard, Login, Error } from "./pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Dashboard></Dashboard>
        </Route>

        <Route path="/login">
          <Login></Login>
        </Route>

        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
