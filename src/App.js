import React, { useState } from 'react';

import { BrowserRouter as  Router,   Switch,  Route} from "react-router-dom";

import Diagram from './Containers/Diagram/Diagram';
import Home from './Containers/Home/Home';

import Menu from './Components/Menu/Menu';

import './App.css';

function App() {
  const [list, setList] = useState([])
  return (
    <>
      <Router>
        <header>
          <Menu />
        </header>
        <main>
          <Switch>
            <Route path="/diagram">
              <Diagram list={list}/>
            </Route>
            <Route path="/" exact>
              <Home list={list} setList={setList}/>
            </Route>
          </Switch>
        </main>
      </Router>
    </>
  );
}

export default App;
