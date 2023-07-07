import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CompatRouter } from "react-router-dom-v5-compat";

import Navbar from "./components/Navbar/Navbar";
import CreatorHome from "./components/Home/CreatorHome";
import Auth from "./components/Auth/Auth";

const App = () => {
  return (
    <Router>
      <div>
        <CompatRouter>
          <Navbar />
          <Switch>
            <Route path="/" exact component={CreatorHome} />
            <Route path="/auth" exact component={Auth} />
          </Switch>
        </CompatRouter>
      </div>
    </Router>
  );
};

export default App;
