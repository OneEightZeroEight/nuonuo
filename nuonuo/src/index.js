import React from 'react';
import ReactDOM from 'react-dom';
//引入哈希路由
import { HashRouter as Router} from "react-router-dom";

// 请求
import axios from 'axios';
import './styles/index.css';
import App from './App';
import * as serviceWorker from './libs/serviceWorker';
React.axios = axios;

ReactDOM.render(
	<Router>
       <App />
	</Router>, 
document.getElementById('root'));

serviceWorker.unregister();
