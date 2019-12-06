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
        <img src="https://i.ibb.co/drgdHtH/Ribbet-Edit.png" className="Rainbow"></img>
      </header>
      <img src="https://i.ibb.co/mDdR849/Whats-App-Image-2019-12-05-at-4-41-32-PM.jpg" className="boschLogo" alt=""></img>
      <div className="">
      <audio id="myAudio">
        <source src={audio} type="audio/ogg"/>
        Your browser does not support the audio element.
      </audio>
        <button onClick={play} className="botonInicio"><Link to="/"></Link>Play</button>
      </div >
      </div>
    );
  }
  
  export default Sound1;



