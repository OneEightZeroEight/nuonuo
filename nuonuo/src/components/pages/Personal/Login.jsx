import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Link } from "react-router-dom";

class Login extends React.Component {
	// constructor(){
	// 	super()
	// }

	render() {
		return (
			<div className="login">
				<header>
					<i><FontAwesomeIcon icon="angle-left"/></i>
					<p>登陆</p>
					<Link to="/Reg" className="reg_link">注册</Link>
				</header>
				<div className="user_main">
					<ul>
						<li>
							<i><FontAwesomeIcon icon="user"/></i>
							<div className="input_box"><input id="user-name" type="text" placeholder="请输入您的用户名"/></div>
						</li>
						<li>
							<i><FontAwesomeIcon icon="lock"/></i>
							<div className="input_box"><input id="user-pw" type="password" placeholder="请输入6到50位登录密码"/></div>
						</li>
						<li>
							<i><FontAwesomeIcon icon="mobile-alt"/></i>
							<div className="input_box"><input id="user-code" type="text" placeholder="请输入验证码"/></div>
						</li>
					</ul>
					<div className="btn_box">
						<button className="login_btn">登陆</button>
					</div>
					
				</div>
			</div>
		)
	};
	
}

export default Login;