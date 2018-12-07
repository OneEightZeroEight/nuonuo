import React from 'react';
import ReactDOM from 'react-dom';
//引入哈希路由
import { HashRouter as Router} from "react-router-dom";

// 请求
import axios from 'axios';

//引入swiper
import  '../node_modules/swiper/dist/js/swiper.js'
import '../node_modules/swiper/dist/css/swiper.min.css'


import App from './App';
import * as serviceWorker from './libs/serviceWorker';
React.axios = axios;


ReactDOM.render(
	<Router>
       <App />
	   
	</Router>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
