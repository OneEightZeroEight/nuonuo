import React from 'react';
import { Link } from "react-router-dom";
import './mianall.css';
class Mianall extends React.Component {
    constructor(props){
        super(props); 
		this.state = {
		  floor:[]
			};
		}
	   
		 componentDidMount(){
			document.addEventListener('scroll',this.getMianall.bind(this));
		 }

		 getMianall(){
			 console.log(document.scrollY);
		 }
	getIndexinfo(url){
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange=()=>{
				if(xhr.readyState === 4 && xhr.status === 200){
					var data = xhr.responseText;
					var flor = JSON.parse(data)
						console.log(JSON.parse(data))
						this.setState({
							floor:flor.allGoods
						})
						
				}
		}
		xhr.open("POST",url,true);
		xhr.send();
	}
	componentDidMount(){
		let url="http://localhost:12345";
				this.getIndexinfo(url);
	}

  render(){
	  return (
		  <div className="content3">
				<div className="g-title3">全部商品</div>
				<ul className="g-goodslist">
				{
					(()=>{
							return this.state.floor.map((item,index)=>{
								return (
					<li key={index}>
					<Link className="item" to={`/ceshi/${item.detailid}`}>
						<div className="m-goodslist-item">
							<div className="u-goodsimg">
								<img className="test-lazyload" src={item.img} />
							</div>
							<span className="active mui-hidden"></span>
						</div>
						<div className="m-mt12">
							<p className="goostitle">{item.name}</p>
							<p className="prod-price m-mt15">
								<span className="yang-pic">¥</span>
								<span className="yang-pic-price">
									<span className="big-price">{item.sellprice}</span>
									<span className="small-price">.00</span>
								</span>
								<span className="good-addCart"></span>
							</p>
						</div>
						</Link>
					</li>
									)
								})
						})()
					}
				</ul>
		  </div>
	  );
  }
}


export default Mianall;