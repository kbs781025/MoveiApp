import * as React from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Navigator from "./Components/Navigator";

function App() {
  return (
    <HashRouter>
      <Navigator />
      <Switch>
        <Route path="/" exact={true} component={Home}></Route>
        <Route path="/movie-detail/:id" component={About}></Route>
        <Route>
          {" "}
          <Redirect to="/"></Redirect>
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
