import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Timer from './components/timer.jsx';

class App extends Component{
	render(){
		return (<div>
			<h1>Count Down is Going On</h1>
			<Timer />

			</div>)
	}

}
ReactDOM.render(<App/>,document.getElementById("app"));