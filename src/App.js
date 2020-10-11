import React, { useState } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Diagram from "./Containers/Diagram/Diagram";
import Diagram2 from "./Containers/Diagram2/Diagram2";
import Home from "./Containers/Home/Home";

import Menu from "./Components/Menu/Menu";

import "./App.css";

export const initialState = {
  id: Date.now(),
  name: "",
  count: 1,
  disabled: false,
};

function App() {
  const getList = localStorage.getItem("test");
  const [list, setList] = useState(JSON.parse(getList) || [initialState]);
  const save = (newList) => {
    setList(newList);
    localStorage.setItem("test", JSON.stringify(newList));
  };
  const listFiltered = list.filter((item) => item.name !== "" && item.count !== "" && !item.disabled);
  const data = {
    list,
    listFiltered,
    colorArr: listFiltered.map(() => `rgb(${Math.floor(Math.random() * Math.floor(255))}, ${Math.floor(Math.random() * Math.floor(255))}, ${Math.floor(Math.random() * Math.floor(255))})`),
    allCount: listFiltered.reduce((acc, item) => acc + item.count, 0),
    save,
    itemDelete: (id) => {
      save(list.filter((item) => item.id !== id));
    },
    itemDisabled: (id) => {
      save(list.map((item) => (item.id === id ? { ...item, disabled: !item.disabled } : item)));
    },
  };

  return (
    <Router>
      <header className="container">
        <Menu />
      </header>
      <main className="container">
        <Switch>
          <Route path="/diagram">
            <Diagram data={data} />
          </Route>
          {/* <Route path="/diagram2">
            <Diagram2 data={data} />
          </Route> */}
          <Route path="/" exact>
            <Home data={data} />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
