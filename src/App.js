import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch, Route} from "react-router-dom";
import Home from './components/Home';
import Scanner from './components/Scanner';
import BusStop from './components/BusStop';


export default function App() {
  return (
    <Router>
      <section className="mainPage">
      <Switch>
      <Route path="/BusStop">
            <BusStop/>
          </Route>
          <Route path="/Scanner">
            <Scanner/>
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
          
        </Switch>
      </section>
    </Router>
  );
}
