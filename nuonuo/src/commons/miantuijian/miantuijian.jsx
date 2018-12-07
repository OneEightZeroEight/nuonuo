import React, { Component }  from 'react';
import { Link } from "react-router-dom";
// import { SearchBar } from 'antd-mobile';
import './miantuijian.css';


class Miantuijian extends Component {
    constructor(props){
        super(props);
        this.props = props;
				this.state = {
					  floor :[]
				}
    }
		
	getIndexinfo(url){
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange=()=>{
				if(xhr.readyState === 4 && xhr.status === 200){
					 var data = xhr.responseText;
					 var flor = JSON.parse(data)
						console.log(JSON.parse(data))
						this.setState({
							 floor:flor.floorGoodsList
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
    render() {
        return (
			<div className="content1">
				<div className="g-title">推荐商品</div>
				<div className="mui-scroll">
						<ul className="g-content">
						 {
							 (()=>{
								   return this.state.floor.splice(0,5).map((item,index)=>{
										 return (
												<li key={index} className="mui-control-item">
												<Link className="item" to={`/detail/${item.detailid,item.areaid}`}>
														<img src={item.c_image} />
														<div>
																<p className="title">{item.c_title}</p>
																<p className="prod-price">
																	<span className="yang-pic ">¥</span>
																	<span className="yang-pic-price">
																	<span className="big-price">{item.c_price}</span>
																	<span className="small-price">.00</span>
																	</span>
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
			</div>	
        );
    }
}

  export default Miantuijian;