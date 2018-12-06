import React,{Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Button extends Component{
	constructor(){
		super()
		this.state = {

		}
	}
	render(){
		return <div className="Button">
			<div className="Bleft">
				<i><FontAwesomeIcon icon="shopping-cart"/></i>
				<span className="total">500</span>
				<span className="text">购物车</span>
			</div>
			<span className="Bcenter">加入购物车</span>
			<span className="Bright">立即购买</span>
		</div>
	}
}

export default Button;
