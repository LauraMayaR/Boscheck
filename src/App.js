import React from 'react';
import './App.css';
import BusStop from './components/BusStop.jsx';
import Scanner from './components/Scanner.jsx';
import Home from './components/Home.jsx';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <section className="mainPage">
      <Switch>
          <Route path="/busStop">
            <BusStop/>
          </Route>
          <Route path="/scanner">
            <Scanner/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </section>
    </Router>
  );
}
