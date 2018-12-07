import React, { Component } from 'react';
// import { Route } from "react-router-dom";

import Homeheader from '../commons/homeheader.jsx'
import Mian from './mian.jsx'
import Nav from '../commons/bottom.jsx'
class Home extends Component {
    constructor(props){
        super(props);
        this.props = props;
		this.state = {
			
		}
    }
    render() {
        return (
            <div>
				<Homeheader></Homeheader>
				<Mian></Mian>
				<Nav></Nav>
            </div>
        );
    }
}

export default Home;