import React from 'react';
import audio from '../inicio recorrido.ogg';
import { Link } from 'react-router-dom';

function Sound1() {
    
    function play(){
       let  x = document.getElementById("myAudio"); 
       x.play(); 
    }



    return (
      <div className="bosch">
          <img src="https://i.ibb.co/z4KSB7N/dhhd.png" className="Rainbow"></img>
        
      <div className="appName">
      <h1>BOSCHECK</h1>
      </div>
      
      <div className="">
      <audio id="myAudio">
        <source src={audio} type="audio/ogg"/>
        Your browser does not support the audio element.
      </audio>
      <div>
      <Link to="/BusStop">
      <img src="https://cdn.dribbble.com/users/174627/screenshots/4891881/dribbble_jumpingpin.gif" className="ubicacion" alt=""></img>
        <button onClick={play} className="botonInicio">INICIAR</button>
        </Link>
      </div >
      </div>
      </div>
    );
  }
  
  export default Sound1;