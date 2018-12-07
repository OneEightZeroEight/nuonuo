import React, { Component } from 'react';
// import { Route } from "react-router-dom";


import Miantuijian from '../commons/miantuijian/miantuijian.jsx'
import Mianwork from '../commons/mianwork/mianwork.jsx'
import Mianall from '../commons/mianall/mianall.jsx'
class Mian extends Component {
    constructor(props){
        super(props);
        this.props = props;
		this.state = {
			
		}
    }
    render() {
        return (
		<div>
				< Miantuijian></ Miantuijian>
				<Mianwork></Mianwork>
				<Mianall></Mianall>
				</div>
        );
    }
}

export default Mian;