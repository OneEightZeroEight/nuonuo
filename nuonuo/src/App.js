import React, { Component } from 'react';
import { Route,Redirect,Switch} from "react-router-dom";

import Home from './Home/Home.jsx';
import Ceshi from './commons/ceshi.jsx';
class App extends Component {
  render() {
    return (
      <div className="App">
				<Switch>
					<Route path="/home/" component={Home} />
					<Route path="/ceshi/" component={Ceshi} />
				</Switch>
      </div>
    );
  }
}

export default App;
