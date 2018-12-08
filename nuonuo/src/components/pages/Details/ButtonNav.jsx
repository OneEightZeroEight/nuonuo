import { DatePicker } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React,{Component} from 'react';
// ReactDOM.render(<DatePicker />, mountNode);
import 'antd/dist/antd.css';
import { Drawer, Button, Radio } from 'antd';

const RadioGroup = Radio.Group;

class Top extends React.Component {
	constructor(props){
        super(props);
        this.state = {
            visible: false, 
            placement: 'left',
            inpVal:1,
			Gnumber:''
        }
    }
  Gnum(){
	 let num=this.state.Gnumber;
	 num++;
	 this.setState({
		Gnumber:num
	 })
	 
  }
  add(){
	  let num=this.state.inpVal;
	  num++;
	  this.setState({
		  inpVal:num
	  })
  }
  jian(){
  	let num=this.state.inpVal;
	if(num>1){
		num--;
	}else{
		num=1
	}
  	this.setState({
  		inpVal:num
  	})
  }
  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div>
        <RadioGroup
          style={{ marginRight: 8 }}
          defaultValue={this.state.placement}
          onChange={this.onChange}
        >
        </RadioGroup>
		<div id="box">
			<div className="left">
				<span className="a">500</span>
				<i><FontAwesomeIcon icon="shopping-cart"/></i>
				<span className="b">购物车</span>
			</div>
			<div className="center" onClick={this.showDrawer}>加入购物车</div>
			<div className="right" onClick={this.showDrawer}>立即购买</div>
		</div>
		<Drawer
          title=""
          placement="bottom"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
		  height="380"
        >
		<div id="bb">
		<div className="ifimg">
			<img className="img" src="https://www.jss.com.cn/FileUpload//shop/goods/201507201651450001/201507211316120001/201507220907_SMALL_0000.jpg"/>
		</div>
		
        <div className="ifcon">
			<p className="title" data-index="">Aisino航天信息激光金额记账凭证发票版</p>
			<p className="price">
				<span className="pic">¥</span>
				<span>220.00</span>
			</p>
		</div>
		
		<div className="prodspec"> 
			<div className="items">
				<p className="prpec">型号:<span className="selects1">激光金额记账凭证发票版</span></p>
			<div className="class">
				<span className="fapiao">激光金额记账凭证发票版</span>
			</div>
			</div> 
			<hr/>
			<div className="number">
			<div className="numbox" data-numbox-min="1" data-numbox-max="71">
				<button className="jian" type="button" disabled="" onClick={this.jian.bind(this)}>-</button>
				<input  className="mui-input" type="number" value={this.state.inpVal}/>
				<button className="jia" type="button" onClick={this.add.bind(this)}>+</button>
				
			</div>
				<p className="kucun">库存:<span>71</span></p>
				<p className="shuliang">数量:<span>{this.state.inpVal}</span></p>
	    </div> 
		<div className="jiaru" onClick={this.Gnum.bind(this)}>加入购物车</div>
		<div className="goumai" >立即购买</div>
		</div>
		</div>
        </Drawer>
      </div>
    );
  }
}
export default Top;