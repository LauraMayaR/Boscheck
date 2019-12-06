import React from 'react';
import './App.css';
import {HashRouter, Route} from 'react-router-dom';
import Home from './components/Home';
import BusStop from './components/BusStop';
import Scanner from './components/Scanner';
import Verified from './components/Verified';



export default function App() {
  return (

    <div>
        <HashRouter>
          <React.Fragment>
            <Route path="/" component={Home}/>
            <Route path="/BusStop" component={BusStop}/>
            <Route path="/Scanner" component={Scanner}/>
            <Route path="/Verified" component={Verified}/>
          </React.Fragment>
        </HashRouter>
    </div>
  );
}
