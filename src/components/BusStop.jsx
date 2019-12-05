import React, {Component} from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

class BusStop extends Component{
    render(){
        return(
            <div className="bus">
              
                  <h2>Tap to save location</h2>
                    <img src="https://images.squarespace-cdn.com/content/v1/500d7112e4b0a738c57eaa53/1543937703824-Z1LFH2PA8KQYKYJLKFTN/ke17ZwdGBToddI8pDm48kGVAqUhYrGdhEGudzFls7K1Zw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PI3qfRO8hJhbvfRCvNhjqrGe-PfXgVTpsvEoluIBTyvM0/bus.gif?format=1000w" className="gif" alt=""></img>  

                <div>
                    <Link to="/Home">
                    <button className="backhome"><img src="https://i.ibb.co/tHRS5gn/home.png" alt="" className="icon" /></button>
                    </Link>
                    <Link to="/Home">
                    <button className="endroad">End road</button>
                    </Link>
                </div>
                 <section>
					<Link to="/scanner">Scanea tu codigo</Link>
		
			</section>
  
                           
            </div>

        );

    }
};

export default BusStop;

