import React from "react";

import $axios from "axios";
import $qs from "qs";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Link } from "react-router-dom";

import '../../../styles/Personal/login.css';



class Login extends React.Component {
	constructor(props){
		super(props)
		this.props = props
		this.state = {
			userName : "",
			userPw : "",
			userCode : "" 
		}
	}

	//监听输入框的内容
	onChangeValue(e){
		// console.log(e.target.name);
		// console.log(e.target.value);
        switch (e.target.name) {
            case "userName"  :
                this.setState({
                    userName: e.target.value
                });
                break;
            case "userPw"  :
                this.setState({
                    userPw: e.target.value
                });
                break;
            case "userCode"  :
                this.setState({
                    userCode: e.target.value
                });
                break;
        }		
	}


	//登陆验证
	toLogin(){

		let userInfo = $qs.stringify({
		    name:this.state.userName,
		    pw:this.state.userPw
		});
		// console.log(userInfo)
		$axios({
		    method: 'post',
		    url:'http://127.0.0.1:4000/User/checkUser',
		    data:userInfo
		}).then((res)=>{
			// console.log(res)
			if(res.data.err === 0){
				alert('不好意思，该用户还未注册请前往注册')
				this.props.history.push('/Reg');
			}else if(res.data.err === 1){
				alert('登陆成功');
				var date = new Date();
				date.setDate(date.getDate()+7);
				document.cookie = "user=" + res.data.data[0].name + ";expires=" + date.toUTCString();
				this.props.history.push('/Personal');
			}
		  				
		});		
	}



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
							<div className="input_box">
								<input 
								onChange={this.onChangeValue.bind(this)}
								name="userName"
								id="userName" 
								type="text" 
								placeholder="请输入您的用户名"/>
							</div>
						</li>
						<li>
							<i><FontAwesomeIcon icon="lock"/></i>
							<div className="input_box">
								<input 
								onChange={this.onChangeValue.bind(this)}
								id="userPw" 
								name="userPw"
								type="password" 
								placeholder="请输入6到50位登录密码"/>
							</div>
						</li>
						<li>
							<i><FontAwesomeIcon icon="mobile-alt"/></i>
							<div className="input_box">
								<input 
								id="userCode" 
								name="userCode"
								type="text" 
								placeholder="请输入验证码"/>
								<span>点击发送验证码</span>
							</div>
						</li>
					</ul>
					<div className="btn_box">
						<button className="login_btn" onClick={this.toLogin.bind(this)}>登陆</button>
					</div>
					
				</div>
			</div>
		)
	};
	
}

export default Login;