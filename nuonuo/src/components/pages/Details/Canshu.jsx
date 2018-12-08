import React,{Component} from 'react';

class Canshu extends Component{
	constructor(){
		super()
		this.state = {	
		}
	}
	render(){
		return <div className='canshu'>
			<ul className="g-parlist">
				<li>
					<div>品牌</div>
					<div>Aisino航天信息</div>
				</li>
				<li>
					<div>商品包装</div>
					<div>纸箱包装</div>
				</li>
				<li>
					<div>商品名称</div>
					<div>激光金额记账凭证发票版</div>
				</li>
				<li>
					<div>商品尺寸</div>
					<div>241*140</div>
				</li>
				<li>
					<div>商品材质</div>
					<div>100%纯木浆</div>
				</li>
				<li>
					<div>商品规格</div>
					<div>发票版</div>
				</li>
				<li>
					<div>型号</div>
					<div>激光记账凭证</div>
				</li>
				<li>
					<div>适用打印机</div>
					<div>激光/喷墨打印机</div>
				</li>
				<li>
					<div>销售单位</div>
					<div>箱</div>
				</li>
			</ul>
		</div>
	}
}

export default Canshu;
