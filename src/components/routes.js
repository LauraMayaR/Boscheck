import React, {Component} from 'react';
import { Switch, Route} from 'react-router-dom';

import Home from './Home';
import BusStop from './BusStop';
import Scanner from './Scanner';




const Routes = () => (
  

    <Switch> 
      <Route exact path="/" component ={Home}/>

      <Route path="/Header" component ={Header}/>
      <Route path="/About" component ={About}/>
      <Route path="/Contact" component ={Contact}/>
      <Route path="/Display" component ={Display}/>
      <Route path="/Useless" component ={Useless}/>
      <Route path="/Skills" component ={Skills}/>
      
    </Switch>
   
      )

  export default Routes;