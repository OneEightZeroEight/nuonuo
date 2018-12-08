import React, { Component } from 'react';
// import { Route } from "react-router-dom";

class Ceshi extends Component {
    constructor(props){
        super(props);
        this.props = props;
		this.state = {
			
		}
    }
	
	 componentDidMount(){
		 console.log(this.props);
		  console.log(123465123);
	 }
    render() {
        return (
		<div>
			<div>123
			这是测试页面
			</div>
			</div>
        );
    }
}

export default Ceshi;