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
			<img src="https://thumbs.gfycat.com/QuaintLikelyFlyingfish-size_restricted.gif" className="check"/>
			<h2>BIENVENIDO</h2>
            <div className="backHome">
				<Link to="BusStop">Regresar</Link>
				</div>
		</div>
  	);
}