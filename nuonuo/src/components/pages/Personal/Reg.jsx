import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Reg extends React.Component {
	constructor(){
		super()
		this.state = {
			"NameValue" : ""
		}
	};

	changeValue(e){
		let o ={};
		o[e.target.name] = e.target.value;
		this.setState(o);
	};

	send(){
		console.log(this.state.NameValue)
		// console.log(this.state.CodeValue)
		// console.log(this.state.PwValue)
	}


	render() {
		return (
			<div className="reg">
				<header>
					<i><FontAwesomeIcon icon="angle-left"/></i>
					<p>注册</p>
				</header>
				<div className="user_main">
					<ul>
						<li>
							<i><FontAwesomeIcon icon="user"/></i>
							<div className="input_box">
								<input 
								value = {this.state.NameValue}
								onChange = {this.changeValue}
								name="user-name"
								id="user-name" 
								type="text" 
								placeholder="请输入您的邮箱"/>
								
							</div>
						</li>
						<li>
							<i><FontAwesomeIcon icon="mobile-alt"/></i>
							<div className="input_box">
								<input id="user-code" type="text" placeholder="请输入邮箱验证码"/>
								<span>发送验证码</span>
							</div>
						</li>
						<li>
							<i><FontAwesomeIcon icon="lock"/></i>
							<div className="input_box"><input id="user-pw" type="password" placeholder="请设置6到50位登录密码"/></div>
						</li>
					</ul>
					<div className="btn_box">
						<button className="reg_btn" onClick={this.send}>注册</button>
					</div>
					
				</div>
			</div>
		)
	};
	
}

export default Reg;