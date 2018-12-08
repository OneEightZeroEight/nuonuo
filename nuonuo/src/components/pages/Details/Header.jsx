import React,{Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {HashRouter as Router,Route,NavLink} from 'react-router-dom';
import { Carousel, WingBlank } from 'antd-mobile';
import DetailMain from './main.jsx';
import DBottom from './DetailBottom.jsx';
import Dnav from './Dnav.jsx';

class Dheader extends Component{
	constructor(){
		super()
		this.state = {
		   
		}
	}
	componentWillMount(){
//		console.log(this.props)
		//发起ajax请求，请求id对应的商品信息
	}

	render(){
		return <div className="Dheader">
			<div className="nav">
				<a className="left"><i><FontAwesomeIcon icon="angle-left"/></i></a>
				<h1 className="center">商品详情</h1>
				<a></a>
			</div>
			<DetailMain></DetailMain>
			<DBottom></DBottom>
			<Dnav></Dnav>
		</div>
	}
}

export default Dheader;
