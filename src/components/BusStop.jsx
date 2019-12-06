import React, {Component} from 'react';
import '../App.css';
import { Link,Redirect,Switch } from 'react-router-dom';

class BusStop extends Component{
<<<<<<< HEAD
  render(){
    return(
      <div className="bus">
				<img src="https://images.squarespace-cdn.com/content/v1/500d7112e4b0a738c57eaa53/1543937703824-Z1LFH2PA8KQYKYJLKFTN/ke17ZwdGBToddI8pDm48kGVAqUhYrGdhEGudzFls7K1Zw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PI3qfRO8hJhbvfRCvNhjqrGe-PfXgVTpsvEoluIBTyvM0/bus.gif?format=1000w" alt=""/>
				<Link to="/scanner">
          <button className="newStation">NUEVA ESTACION</button>
        </Link>
=======
    render(){
        return(
            <div className="bus">
              
                  <h2>Tap to save location</h2>
                  <button className="backhome"><img src="https://i.ibb.co/tHRS5gn/home.png" alt="" className="icon" /></button>
                    <img src="https://images.squarespace-cdn.com/content/v1/500d7112e4b0a738c57eaa53/1543937703824-Z1LFH2PA8KQYKYJLKFTN/ke17ZwdGBToddI8pDm48kGVAqUhYrGdhEGudzFls7K1Zw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PI3qfRO8hJhbvfRCvNhjqrGe-PfXgVTpsvEoluIBTyvM0/bus.gif?format=1000w" className="gif" alt=""></img>  
>>>>>>> e3d83a73c3361e6d6654d658cc55dedbdf2b5bcb

				<div>
          <Link to="/Home">
            <button className="backhome"><img src="https://i.ibb.co/tHRS5gn/home.png" alt="" className="icon" /></button>
          </Link>
          <Link to="/Home">
            <button className="endroad">End road</button>
          </Link>
        </div>
			</div>

        );

    }
};

export default BusStop;

