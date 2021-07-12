import React from "react"
import {Switch, Route} from "react-router-dom"

import Header from "./components/header"
import Home from "./pages/home"
import Second from "./pages/second"


function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/second">
          <Second />
        </Route>
      </Switch>
    </div>
  )
}

export default App;
