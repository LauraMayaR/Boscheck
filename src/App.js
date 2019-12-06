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


    <div>
        <HashRouter>
          <React.Fragment>
            <Route path="/" component={Home}/>
            <Route path="/BusStop" component={BusStop}/>
            <Route path="/Scanner" component={Scanner}/>

            <Route path="/Verified" component={Verified}/>

            <Route path="/Audio" component={Audio}/>
          

          </React.Fragment>
        </HashRouter>
    </div>
  );
}
