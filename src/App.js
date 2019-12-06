import React from 'react';
import './App.css';
import {HashRouter, Route} from 'react-router-dom';
import Home from './components/Home';
import BusStop from './components/BusStop';
import Time from './components/Time';
import Sound from './components/Audio';
import Sound1 from './components/inicio';
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
            <Route path="/Audio" component={Sound}/>
            <Route path="/inicio" component={Sound1}/>
            <Route path="/Time" component={Time}/>
          </React.Fragment>
        </HashRouter>
    </div>
  );
}
