import React, { Component, Fragment } from 'react';
import '../css/style.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './Header/Header';
import Footer from './Footer/Footer';
import routes from './routes';
export class App extends Component {
	showContentMenus = (routes) =>{
		var result = null;
		if (routes.length > 0) {
			result = routes.map((route, index) => {
				return (  <Route
						key={index}
						path={route.path}
						exact={route.exact}
						component={route.main}
				/>
				);
			});
		}
		return result;
	}
	render() {
		return ( 
		<Router>
		<div>
			<Header/>

			<Switch>
				{this.showContentMenus(routes)}
			
			</Switch>
			
			<Footer/>	

		</div>
		</Router>
		);
	}


}


export default App