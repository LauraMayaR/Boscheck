
import React, {Component} from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

class Home extends Component{
  render(){
    return(
      <div className="bosch">
        <header>
					<img src="https://i.ibb.co/drgdHtH/Ribbet-Edit.png" className="Rainbow"></img>
				</header>
				<img src="https://i.ibb.co/mDdR849/Whats-App-Image-2019-12-05-at-4-41-32-PM.jpg" className="boschLogo" alt=""></img>
        <div className="">
					<div>
            
						<Link to="/BusStop">
						<button className="botonInicio">START</button>
						</Link>
          </div>
        </div>
      </div>

        );

    }
};

export default Home;

