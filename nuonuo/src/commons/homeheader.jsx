import React, { Component }  from 'react';
import { SearchBar } from 'antd-mobile';
import $axios from "axios";
import $qs from "qs";
import '../styles/homeheader.css'


class Homeheader extends Component {
    constructor(props){
        super(props);
        this.props = props;
    }
		
		
		sendinfo(){
			let userInfo = $qs.stringify({
						areaid: '201204151213142140',
						detailid: 'FF808081C3A238058823'	 
				})
			$axios({
				method: 'post',
				url:'https://m.axnsc.com/app/appShopGoods/allow/getGoodsDetail.action?_=1544253901040',
				headers:{
					
            'Accept': 'application/json',
						'Content-Type':'application/x-www-form-urlencoded'
              },
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
		<header className="g-header1">
			<div className="my-city">
				<span className="u-city" onClick={this.sendinfo.bind(this)}>重庆
				<i className="fa fa-angle-down"></i></span>
			</div>
      <SearchBar placeholder="自动获取光标" ref={ref => this.autoFocusInst = ref} />
		</header>
        );
    }
}

  export default Homeheader;