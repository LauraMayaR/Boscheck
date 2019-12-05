import React, {Component} from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

class BusStop extends Component{
    render(){
        return(
            <div className="bus">
                  <h2>Tap to save location</h2>
                    <img src="https://media1.giphy.com/media/hW9F9LCdMgHpKjoYx9/giphy.webp?cid=790b7611fdc3f1fc22eb35e0cb1c21df021951474dc8a62b&rid=giphy.webp" className="background" alt=""></img>
              
                <button>Home</button>

                <div>
                    <Link to="/Home">
                    <button className="backhome">Home</button>
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