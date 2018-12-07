import React, { Component } from 'react';
import './mianall.css'
class Mianall extends Component {
    constructor(props){
        super(props); 
		this.state = {
		  floor:[]
			};
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
						<div className="m-goodslist-item">
							<a className="u-goodsimg">
								<img className="test-lazyload" src={item.img} />
							</a>
							<span className="active mui-hidden"></span>
						</div>
						<div class="m-mt12">
							<p class="goostitle">{item.name}</p>
							<p class="prod-price m-mt15">
								<span class="yang-pic">¥</span>
								<span class="yang-pic-price">
									<span class="big-price">{item.sellprice}</span>
									<span class="small-price">.00</span>
								</span>
								<span class="good-addCart"></span>
							</p>
						</div>
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