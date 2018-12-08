import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Nav from '../../../commons/bottom.jsx'
import '../../../styles/Personal/my.css';


class Personal extends React.Component {
	constructor(){
		super()
		this.state = {
			name:""
		}
	};
	componentWillMount(){
		let userName = document.cookie;
		userName = userName.split("=")[1];
		// return userName
		// console.log(userName)
		this.setState({
			name : userName
		})
	}

	render() {
		return (
			<div className="personal">
				<div className="g-header">
					<div className="user-photo">
						<img src="https://m.axnsc.com/Contents/images/tou1.png"/>
					</div>
					<div className="user-name">
					{
						(()=>{
							if(typeof(this.state.name) === 'undefined'){
								return (
									<Link to="/Login" className="login">
										登录/注册
									</Link>	
								)
							}else{
								return(
									<p>{this.state.name}</p>
								)
							}
						})()
					}
											
					</div>
				</div>	
				<div className="g-orderact">
					<ul className="m-orderAct">
						<li>
							<a href="#">
								<span className="unpay">
									<img  className="corner" src="https://m.axnsc.com/Contents/images/obligation.png"/>
								</span>
								<label>待付款</label>
							</a>
						</li>
						<li>
							<a href="#">
								<span className="already">
									<img className="corner" src="https://m.axnsc.com/Contents/images/logistics.png"/>
								</span>
								<label>已发货</label>
							</a>
						</li>
					</ul>
				</div>	
				<div className="g-label-act">
					<ul className="m-label">
						<li data-index="ordersall">
							<p>
								<span className="ord-img"><i className="before"><FontAwesomeIcon icon="shopping-bag"/></i></span>
								<label>全部订单</label>								
							</p>
							<p>
								<label className="m-fr or">无订单<i><FontAwesomeIcon icon="angle-right"/></i></label>
							</p>
						</li>
						<li data-index="coupons">
							<p>
							<span className="cou-img"><i><FontAwesomeIcon icon="money-bill-wave-alt"/></i></span>
							<label>我的优惠券</label>
							</p>
							<p>
							<label className="m-fr cp">无优惠券<i><FontAwesomeIcon icon="angle-right"/></i></label>
							</p>
						</li>
						<li data-index="address">
						<p>
							<span className="adds-img"><i className="before"><FontAwesomeIcon icon="address-book"/></i></span>
							<label>地址管理</label>
						</p>
						<p>
							<label className="m-fr ad">添加新地址<i><FontAwesomeIcon icon="angle-right"/></i></label>
						</p>
						</li>
						<li data-index="myintegral">
						<p>
							<span className="int-img"><i className="before"><FontAwesomeIcon icon="coins"/></i></span>
							<label>我的积分</label>
						</p>
						<p>
							<label className="m-fr in">0分<i><FontAwesomeIcon icon="angle-right"/></i></label>
						</p>
						</li>
						<li data-index="invoiceManage">
						<p>
							<span className="inv-img"><i className="before"><FontAwesomeIcon icon="file-invoice"/></i></span>
							<label>发票信息管理</label>
						</p>
						<p>
							<label className="m-fr inv ad">无信息<i><FontAwesomeIcon icon="angle-right"/></i></label>
						</p>
						</li>
					</ul>
				</div>
				<Nav/>
			</div>
			
		)
		
	};
	
}

export default Personal;