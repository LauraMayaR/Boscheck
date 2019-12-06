import React from 'react';
import audio from '../inicio recorrido.ogg';

function Sound1() {
    
    function play(){
       let  x = document.getElementById("myAudio"); 
       x.play(); 
    }



    return (
      <div >
      <audio id="myAudio">
        <source src={audio} type="audio/ogg"/>
        Your browser does not support the audio element.
      </audio>
        <button onClick={play}>Play</button>
      </div >
    );
  }
  
  export default Sound1;