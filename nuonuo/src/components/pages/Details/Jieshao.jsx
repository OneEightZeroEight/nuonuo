import React,{Component} from 'react';

class Jieshao extends Component{
	constructor(){
		super()
		this.state = {
			imgs:[
			"https://www.jss.com.cn/FileUpload/Contents/common/ueditor/jsp/upload/20150722/45111437528802169.jpg",
			"https://www.jss.com.cn/FileUpload/Contents/common/ueditor/jsp/upload/20150722/16191437528802241.jpg",
			"https://www.jss.com.cn/FileUpload/Contents/common/ueditor/jsp/upload/20150722/40231437528802355.jpg",
			"https://www.jss.com.cn/FileUpload/Contents/common/ueditor/jsp/upload/20150722/66531437528802486.jpg",
			"https://www.jss.com.cn/FileUpload/Contents/common/ueditor/jsp/upload/20150722/23851437528802604.jpg",
			"https://www.jss.com.cn/FileUpload/Contents/common/ueditor/jsp/upload/20150722/98751437528802727.jpg",
			"https://www.jss.com.cn/FileUpload/Contents/common/ueditor/jsp/upload/20150722/13981437528802860.jpg",
			"https://www.jss.com.cn/FileUpload/Contents/common/ueditor/jsp/upload/20150722/22311437528803299.jpg",
			"https://www.jss.com.cn/FileUpload/Contents/common/ueditor/jsp/upload/20150722/33891437528803637.jpg"
			]
		}
	}
	render(){
		return <div className='jieshao'>
			{
				this.state.imgs.map((img,idx)=>{
					return <div className='tupian'><img src={img} alt="" key={idx} /></div>
				})
			}
		</div>
	}
}

export default Jieshao;