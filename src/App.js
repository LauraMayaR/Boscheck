import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch, Route} from "react-router-dom";
import Home from './components/Home';
import Scanner from './components/Scanner';
import BusStop from './components/BusStop';
import Time from './components/Time';
import Sound from './components/Audio';
import Sound1 from './components/inicio';


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

          <Route path="/Time">
            <Time/>
          </Route>

          <Route path="/Audio">
            <Sound/>
          </Route>
          
          <Route path="/inicio">
            <Sound1/>
          </Route>

        </Switch>
      </section>
    </Router>
  );
}
