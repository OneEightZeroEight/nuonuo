import React, { Component } from 'react';
import './mianwork.css';
class Mianwork extends Component {
    constructor(props){
        super(props);
        this.props = props;
		this.state = {
			floor:[]
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
		<div className="content2">
		   <div className="g-title1 work">办公商品</div>
			 <div className="g-content2">
		   {
			(()=>{
					return this.state.floor.splice(-8).map((item,index)=>{
						return (
									<div className="box" key={index}>
											<a style={{display: 'inline-block',width: '88px'}}>
												<img src={item.c_image} />
											</a>
											<div>
												<p className="title">{item.c_title}</p>
												<p className="prod-price  ">
													<span className="yang-pic">¥</span>
													<span className="yang-pic-price">
														<span className="big-price">{item.c_price}</span>
														<span className="small-price">.00</span>
													</span>
												</p>
											</div>
									</div>
				        )
				      })
				  })()
			}		
				 </div>
			</div>
        );
    }
}

export default Mianwork;