import React,{Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Top from './ButtonNav.jsx';
class Button extends Component{
	constructor(){
		super()
		this.state = {

		}
	}
	render(){
		return <div className="Button">
			<Top />
		</div>
	}
}

export default Button;
