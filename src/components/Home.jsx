import React, {Component} from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

class Home extends Component{
    render(){
        return(
            <div className="bosch">
               <heder><img src="https://i.ibb.co/drgdHtH/Ribbet-Edit.png" className="Rainbow"></img></heder> 
                    <img src="https://i.ibb.co/mDdR849/Whats-App-Image-2019-12-05-at-4-41-32-PM.jpg" className="boschLogo" alt=""></img>
              <div className="">
                <button className="botonInicio">START</button>

                <div>
                    <Link to="/Home">
                    </Link>
                    <Link to="/Home">
                    </Link>
                </div>
                           
            </div>
            </div>

        );

    }
};

export default Home;
