import React from 'react';
import img from '../img/checked.gif';
import {
	BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export default function Verified () {
	return (
		<div className="welcome">
            <img className="checkedGif" src={img}/>
			<h1>BIENVENIDO</h1>
            <div className="backHome">
				<Link to="/">INICIO</Link>
				</div>
		</div>
  	);
}