import React, { Component } from 'react';
// import { Route } from "react-router-dom";


import Miantuijian from '../commons/miantuijian/miantuijian.jsx'
import Mianwork from '../commons/mianwork/mianwork.jsx'
import Mianall from '../commons/mianall/mianall.jsx'
class Mian extends Component {
    constructor(props){
        super(props);
        this.props = props;
		this.state = {
			// floor:[]
		}
    }
	
// 	 componentDidMount(){
// 				 let url="http://localhost:12345";
// 				 this.getIndexinfo(url);
// 				window.addEventListener('scroll',this.getMianall.bind(this));	
// 			 }
// 	
// 			 
// 			 getIndexinfo(url){
// 			 		var xhr = new XMLHttpRequest();
// 			 		xhr.onreadystatechange=()=>{
// 			 				if(xhr.readyState === 4 && xhr.status === 200){
// 			 					var data = xhr.responseText;
// 			 					var flor = JSON.parse(data)
// 			 						console.log(flor)
// 			 						this.setState({
// 			 							floor:flor.allGoods
// 			 						})
// 			 						
// 			 				}
// 			 		}
// 			 		xhr.open("POST",url,true);
// 			 		xhr.send();
// 			 	}
// 				
// 				getMianall(){
// 					console.log(window.scrollY);
// 					if(window.scrollY > 2500){
// 						console.log(123);
// 						this.setState({
// 					floor:this.floor.concat(JSON.parse(data))		  
// 						})
// 					}
// 				}
    render() {
        return (
		<div>
				< Miantuijian></ Miantuijian>
				<Mianwork></Mianwork>
				<Mianall></Mianall>
				</div>
        );
    }
}

export default Mian;