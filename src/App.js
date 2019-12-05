import React from 'react';
import './App.css';
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
