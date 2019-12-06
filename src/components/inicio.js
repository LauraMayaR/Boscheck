import React from 'react';
import audio from '../inicio_recorrido.ogg';
import { Link } from 'react-router-dom';

function Sound1() {
    
    function play(){
       let  x = document.getElementById("myAudio");
       x.play();
    }

    return (
      <div className="bosch">
      <header>
      <img src="https://i.ibb.co/z4KSB7N/dhhd.png" className="arcoiris"/>
      </header>
      <h1>BOSCHECK</h1>
      <img src="" className="boschLogo" alt=""></img>
      <img src="https://cdn.dribbble.com/users/174627/screenshots/4891881/dribbble_jumpingpin.gif"></img>
      <div className="">
      <audio id="myAudio">
        <source src={audio} type="audio/ogg"/>
        Your browser does not support the audio element.
      </audio>
        <Link to="/BusStop">
        <button onClick={play} className="botonInicio">INICIO</button>
          </Link>
      </div >
      </div>
    );
  }
  
  export default Sound1;



