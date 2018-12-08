import React, { Component } from 'react';
import { Route,HashRouter,Redirect} from "react-router-dom";

//个人中心页面组件
import Personal from './components/pages/Personal/Personal.jsx';
//登陆页面
import Login from './components/pages/Personal/Login.jsx';
//注册页面
import Reg from './components/pages/Personal/Reg.jsx';
//购物车页面
import buyCar from './components/pages/buyCar/buyCar.jsx';
import Home from './Home/Home.jsx';
import Ceshi from './commons/ceshi.jsx';
//FontAwesome字体图标框架
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight,faAngleLeft,faShoppingBag,faMoneyBillWaveAlt,faAddressBook,faCoins,faFileInvoice,faUser,faMobileAlt,faLock } from '@fortawesome/free-solid-svg-icons'
library.add(faAngleRight,faAngleLeft,faShoppingBag,faMoneyBillWaveAlt,faAddressBook,faCoins,faFileInvoice,faUser,faMobileAlt,faLock)




class App extends Component {
  render() {
    return (
    	<HashRouter>
	      	<div className="App">	
					<Route path="/home/" component={Home} />
					<Route path="/ceshi/" component={Ceshi} />
          <Route path="/buyCar" component={buyCar} />
	    		<Route path="/Personal" component={Personal} />
	    		<Route path="/Login" component={Login} />
	    		<Route path="/Reg" component={Reg} />
	        </div>
        </HashRouter>
    );
  }
}

export default App;
