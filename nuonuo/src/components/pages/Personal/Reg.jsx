import React from "react";
import $axios from "axios";
import $qs from "qs";
import '../../../styles/Personal/reg.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Reg extends React.Component {
	constructor(props){
		super(props)
		this.props = props;
		// this.props= props;
		this.state = {
			userName :"",
			userPw :"",
			userCode :"",
			getCode : ""
		}
	};

	onChangeValue(e){
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
	};
	// 发送验证码
	sendCode(){
		
	};
	//发送注册信息
	sendinfo(){
		// console.log(this.state)
		let userInfo = $qs.stringify({
		    name:this.state.userName,
		    pw:this.state.userPw
		});
		// console.log(userInfo)
		$axios({
		    method: 'post',
		    url:'http://127.0.0.1:4000/User/addUser',
		    data:userInfo
		}).then((res)=>{
			console.log(res)
			if(res.data.err === 2){
				alert('该手机号已经被注册了哦')
			}else if(res.data.err === 0){
				alert('恭喜你注册成功');
				this.props.history.push('/Login');
				
			}else if(res.data.err === -1){
				alert('系统错误,请重新输入');
			}
		  				
		});
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
								onChange={this.onChangeValue.bind(this)}
								name="userName"
								id="userName" 
								type="text" 
								placeholder="请输入您的手机"/>
							</div>
						</li>
						<li>
							<i><FontAwesomeIcon icon="mobile-alt"/></i>
							<div className="input_box">
								<input 
								onChange={this.onChangeValue.bind(this)}
								name="userCode"
								id="userCode" 
								type="text" 
								placeholder="请输入手机验证码"/>
								<span onClick={this.sendCode}>点击发送验证码</span>
							</div>
						</li>
						<li>
							<i><FontAwesomeIcon icon="lock"/></i>
							<div className="input_box">
								<input 
								onChange={this.onChangeValue.bind(this)}
								name="userPw"
								id="userPw" 
								type="password" 
								placeholder="请设置6到50位登录密码"/>
							</div>
						</li>
					</ul>
					<div className="btn_box">
						<button className="reg_btn" onClick={this.sendinfo.bind(this)}>注册</button>
					</div>
					
				</div>
			</div>
		)
	};
	
}

export default Reg;