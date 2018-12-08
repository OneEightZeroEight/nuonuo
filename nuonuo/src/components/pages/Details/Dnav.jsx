import React,{Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {HashRoute,Router,Route,Link,NavLink,Switch} from 'react-router-dom';

import PropTypes from 'prop-types';

import Jieshao from './Jieshao';
import Canshu from './Canshu';

class Dnav extends Component{
	constructor(){
		super()
		this.state = {
			tabs:[
				{
					id:1,
					name:'商品介绍',
					path:'/Jieshao'
				},
				{
					id:2,
					name:"商品参数",
					path:'/Canshu'
				}
			]
		}
	}
	render(){
		return <div className="tuodong">
			<p>继续拖动，查看图文详情</p>
			<div className="Bnav">
				<ul>
					{
						this.state.tabs.map((item,idx)=>{
							return <NavLink key={idx} to={item.path} 
							activeStyle={{color:'#FE8604',fontSize:'0.432432rem',fontWeight: 'bolder',borderBottom:'2px solid #FE8604'}}
							>{item.name}</NavLink>
						})
					}
				<Switch>
					<Route path="/Jieshao" component={Jieshao} />
		    		<Route path="/Canshu" component={Canshu} />
				</Switch>
				</ul>
			</div>
		</div>
	}
}

export default Dnav;
