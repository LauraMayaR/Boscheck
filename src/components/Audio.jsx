import React, { Component } from "react"
 
class Audio extends Component {
   render() {
 return (
   <div>
<audio src="../bienvenido.mp3.ogg" preload="metadata" controls></audio>
<audio src="../bienvenido.mp3.ogg" autoplay loop></audio>
   </div>
   
   );

}
};


export default Audio;