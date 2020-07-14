import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Scroll from "./scroll";
import "./App.css";
import Box from "./box";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact={true} path="/" component={Box} />
        <Route path="/scroll" component={Scroll} />
      </Switch>
    );
  }
}
export default App;
