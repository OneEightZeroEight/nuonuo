import React, { Component } from 'react';
import { Route,HashRouter } from "react-router-dom";

/*=====================详情页=============================*/
import Dheader from './components/pages/Details/Header.jsx';
/*==================================================*/

//FontAwesome字体图标框架
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight,faAngleRight,faAngleLeft,faShoppingBag,faMoneyBillWaveAlt,faAddressBook,faCoins,faFileInvoice,faUser,faMobileAlt,faLock,faShoppingCart} from '@fortawesome/free-solid-svg-icons'
library.add(faChevronRight,faAngleRight,faAngleLeft,faShoppingBag,faMoneyBillWaveAlt,faAddressBook,faCoins,faFileInvoice,faUser,faMobileAlt,faLock,faShoppingCart)

class App extends Component {
  render() {
    return (
    	<HashRouter>
	      	<div className="App">		
		    	<Route path="/" component={Dheader}/>
	        </div>
      </HashRouter>
    );
  }
}

export default App;
