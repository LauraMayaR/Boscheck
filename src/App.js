import React from 'react';
import './App.css';
import {HashRouter, Route} from 'react-router-dom';
import inicio from './components/inicio';
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

            <Route exact path="/" component={inicio}/>
            <Route exact path="/BusStop" component={BusStop}/>
            <Route exact path="/Scanner" component={Scanner}/>
            <Route exact path="/Verified" component={Verified}/>
            <Route exact path="/Audio" component={Sound}/>
            <Route exact path="/inicio" component={Sound1}/>
            <Route exact path="/Time" component={Time}/>

          </React.Fragment>
        </HashRouter>
    </div>
  );
}
