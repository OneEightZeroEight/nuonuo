import React,{Component} from 'react';

import {HashRouter as Router,Route,NavLink} from 'react-router-dom';

class Dheader extends Component{
	componentWillMount(){
		console.log(this.props)
		//发起ajax请求，请求id对应的商品信息
	}
	render(){
		return <div className="nav">
			<a className="left"></a>
			<h1 className="center">购物车</h1>
			<a className="right">编辑</a>
		</div>

	}
}

export default Dheader;
