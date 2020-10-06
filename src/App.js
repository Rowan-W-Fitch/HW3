import React from 'react';
import "normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./Home/Home";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <Router>
         <Switch>
           <Route path="/">
             <Home />
           </Route>
         </Switch>
       </Router>
    </div>
  );
}

export default App;
