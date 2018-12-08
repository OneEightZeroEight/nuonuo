var express = require("express");
var request = require("request");
// 代理
var app = express();
app.post("/",(req,res)=>{
    // cors
    res.append("Access-Control-Allow-Origin","*");
		request.post('https://m.axnsc.com/app/appShopIndex/allow/indexInfo.action?_=1544168551209', {form:{
			pageSize: "20",currentPage: "0",
			areaid: "201204151213142140"
			}},(err,response,body)=>{
        // console.log(body);
				console.log(response)
        res.send(body);
    })
})
app.listen(12345)