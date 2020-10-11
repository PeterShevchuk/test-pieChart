import React, { useState } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Diagram from "./Containers/Diagram/Diagram";
import Home from "./Containers/Home/Home";

import Menu from "./Components/Menu/Menu";

import "./App.css";

export const initialState = {
  id: Date.now(),
  name: "",
  count: 1,
};

function App() {
  const getList = localStorage.getItem("test");
  const [list, setList] = useState(getList ? JSON.parse(getList) : [initialState]);
  const save = (newList) => {
    setList(newList);
    localStorage.setItem("test", JSON.stringify(newList));
  };
  return (
    <Router>
      <header className="container">
        <Menu />
      </header>
      <main className="container">
        <Switch>
          <Route path="/diagram">
            <Diagram list={list} save={save} />
          </Route>
          <Route path="/" exact>
            <Home list={list} save={save} />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
