import React from "react";

import $axios from "axios";
import $qs from "qs";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Link } from "react-router-dom";

import '../../../styles/buyCar/buycar.scss';



class buyCar extends React.Component {
	constructor(){
		super()

	}


	render() {
		return (
      	<div className="car">
            <div className="container">
                <header>
                  <i><FontAwesomeIcon icon="angle-left"/></i>
                  <span>购物车</span>
                  <span>编辑</span>
                </header>
                <div>
                    <ul className="pro_box">
                      	<li className="goodList">
	                        <input type="checkbox" className="select" />
	                        <img src="https://www.jss.com.cn/FileUpload//shop/goods/201701031353100001/201701031357473583/201701031409284184_SMALL_0000.jpg?_=1544151469800,https://www.jss.com.cn/FileUpload//shop/goods/201701031353100001/201701031357473583/201701031409284184_SMALL_0001.jpg?_=1544151469802,https://www.jss.com.cn/FileUpload//shop/goods/201701031353100001/201701031357473583/201701031409284184_SMALL_0002.jpg?_=1544151469803,https://www.jss.com.cn/FileUpload//shop/goods/201701031353100001/201701031357473583/201701031409284184_SMALL_0003.jpg?_=1544151469805," alt="#"/>
	                        <div className="count">
								<div className="price">
									<span className="Name">得力(deli) 卡通多功能文具盒 大容量韩版时尚学生男女生铅笔盒 95559 </span>
									<span className="size"></span>
									<span className="subtotal">￥9.00</span>
								  	<div className="num_box">
								        <button>-</button>                          
								        <span>1</span>
								        <button>+</button>
								  	</div>
								</div>
	                        </div>                  
	                        <span className="unitPrice"></span>
                      	</li>
                      	<li className="goodList">
	                        <input type="checkbox" className="select" />
	                        <img src="https://www.jss.com.cn/FileUpload//shop/goods/201701031353100001/201701031357473583/201701031409284184_SMALL_0000.jpg?_=1544151469800,https://www.jss.com.cn/FileUpload//shop/goods/201701031353100001/201701031357473583/201701031409284184_SMALL_0001.jpg?_=1544151469802,https://www.jss.com.cn/FileUpload//shop/goods/201701031353100001/201701031357473583/201701031409284184_SMALL_0002.jpg?_=1544151469803,https://www.jss.com.cn/FileUpload//shop/goods/201701031353100001/201701031357473583/201701031409284184_SMALL_0003.jpg?_=1544151469805," alt="#"/>
	                        <div className="count">
								<div className="price">
									<span className="Name">得力(deli) 卡通多功能文具盒 大容量韩版时尚学生男女生铅笔盒 95559 </span>
									<span className="size"></span>
									<span className="subtotal">￥9.00</span>
								  	<div className="num_box">
								        <button>-</button>                          
								        <span>1</span>
								        <button>+</button>
								  	</div>
								</div>
	                        </div>                  
                      	</li>                          
                    </ul>
                </div>
            </div>
			<div className="footer">
				<li>
				  <input type="checkbox"/> 全选 
				</li>
				<li className="total">
				  <span>总计：￥9.00</span><br/>
				  <span className="explain">不含运费和进口税</span>
				</li>
				<li><button>结算</button></li>
			</div>
      	</div>		
		)
	};
	
}

export default buyCar;