import React, { Component } from 'react';
import '../styles/bottom.css'
class Nav extends Component {
    constructor(props){
        super(props);
        // this.props = props;
		this.state = {
			nav:0,
			list:[{
					title:"商城",
					imgs:<i className="fa fa-home" aria-hidden="true"></i>,
					href:""
				},{
					title:"购物车",
					imgs:<i className="fa fa-shopping-cart" aria-hidden="true"></i>,
					href:""
				},{
					title:"我的",
					imgs:<i className="fa fa-user" aria-hidden="true"></i>,
					href:""
				}]
		}
    }
	navigateTo(index,e){
		this.setState({
			nav:index
		})
	}
    render() {
        return (
		// 
			<nav className="footer-bottom-fxied">
			{
				(()=>{
					return this.state.list.map((item,index)=>{
						return (
						<div className={index === this.state.nav?"home active":"home"} onClick={this.navigateTo.bind(this,index)} key={index}>
							<span>{item.imgs}</span>
							<p>{item.title}</p>
						</div>
						)
					})
				})()
			}
		
		{/*<a className="cart">
			<label className="cart-num mui-hidden"></label>
			<span><i className="fa fa-shopping-cart" aria-hidden="true"></i></span>
			<p>购物车</p>
		</a>
		<a className="my">
			<span><i className="fa fa-user" ></i></span>
			<p>我的</p>
		</a>*/}
	</nav>	
		
        );
    }
}

export default Nav;