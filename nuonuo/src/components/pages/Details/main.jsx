import React,{Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {HashRouter as Router,Route,NavLink} from 'react-router-dom';
import { Carousel} from 'antd-mobile';

class DetailMain extends Component{
	constructor(){
		super()
		this.state = {
		    imgs:['../../../images/1.jpg','../../../images/2.jpg','../../../images/3.jpg','../../../images/4.jpg']
		}
	}
	render(){
		return <div className="DetailMain">
			<div className="main">
				<div className="top">
			        <Carousel
			          autoplay={true}
			          infinite
			        >
			          {this.state.imgs.map((url,idx) => (
			            <a key={idx} href="#">
			              <img src={url} alt="" style={{width: '100%', height:"9rem",paddingTop:'1.21rem'}}/>
			            </a>
			          ))
			          }
			        </Carousel>   
				</div>
				<div className="Btop">
					<p className="tital">Aisino航天信息激光金额记账凭证发票版</p>
					<div className="jia">
						<span className="price">¥</span>
						<span className="zhi">220.00</span>
					</div>
					<div className="kuaidi">快递:<span>0.00</span></div>
				</div>
			</div>
			<div className="g-list">
				<ul className="g-item">
					<li className="l1">
						<div className="field">已选</div>
						<div className="omit">激光金额记账凭证发票版</div>
						<i><FontAwesomeIcon icon="chevron-right"/></i>
					</li>
					<li className="l2">
						<div className="field">服务</div>
						<div className="omit">由诺诺商城发货并提供售后服务</div>
					</li>
				</ul>
			</div>
		</div>
	}
}
export default DetailMain;
