import React, { Component } from 'react'
import QrReader from 'react-qr-reader'
import QrDB from './QrData.js';
import {
	BrowserRouter as Router,
  Switch,
  Route,
	Link,
	Redirect
} from "react-router-dom";

class Qr extends Component {
  state = {
		result:false,
		message:"ESCANEA TU CÓDIGO"
  }

  handleScan = data => {
    if (data) {
			const isMember = QrDB.find(member=>member.number===data)
			if (isMember){
				this.setState({
					result: data
				})
			} else {
				this.setState({
					result:false, message:"USUARIO NO VÁLIDO"
				})
			}
			console.log (isMember);

    }
  }
  handleError = err => {
    console.error(err)
  }
  render() {
    return (

      <div>

        <QrReader
          delay={300}
          onError={this.handleError}
          onScan={this.handleScan}
          style={{ width: '400px' }}
          className="QrReader"
        />
				<p>
					{this.state.message}
				</p>

				{this.state.result ? <Redirect to="/Verified"/>:""}
      </div>
    )
  }
}

export default Qr;