import React from 'react';
import {Link} from "react-router-dom";









export default function Home() {
	return (
    <div>
        <header >
            <h1>Holaaaa</h1>
        </header>
			<section>
				<nav>
					<Link to="/BusStop">Siguiente paso para registrar</Link>
					
				</nav>
			</section>
    </div>
    );
    }