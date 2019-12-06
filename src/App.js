import React from 'react';
import './App.css';
import {HashRouter, Route} from 'react-router-dom';
import Home from './components/Home';
import BusStop from './components/BusStop';
import Scanner from './components/Scanner';
<<<<<<< HEAD
import Verified from './components/Verified';
=======
import Audio from './components/Audio';
>>>>>>> e3d83a73c3361e6d6654d658cc55dedbdf2b5bcb



export default function App() {
  return (

    <div>
        <HashRouter>
          <React.Fragment>
            <Route path="/" component={Home}/>
            <Route path="/BusStop" component={BusStop}/>
            <Route path="/Scanner" component={Scanner}/>
<<<<<<< HEAD
            <Route path="/Verified" component={Verified}/>
=======
            <Route path="/Audio" component={Audio}/>
          
>>>>>>> e3d83a73c3361e6d6654d658cc55dedbdf2b5bcb
          </React.Fragment>
        </HashRouter>
    </div>
  );
}
