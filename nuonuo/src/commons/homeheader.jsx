import React, { Component }  from 'react';
import { SearchBar } from 'antd-mobile';
import '../styles/homeheader.css'


class Homeheader extends Component {
    constructor(props){
        super(props);
        this.props = props;
    }
    render() {
        return (
		<header className="g-header">
			<div className="my-city">
				<span className="u-city">重庆
				<i className="fa fa-angle-down"></i></span>
			</div>
      <SearchBar placeholder="自动获取光标" ref={ref => this.autoFocusInst = ref} />
		</header>
        );
    }
}

  export default Homeheader;