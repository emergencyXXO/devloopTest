import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header/';
import Login from './components/Login';
import MainPage from './components/MainPage';


class App extends React.Component {

	render() {
		return (
			<div className="App ">
				<Header />
				<div className="main__part container">
					<Switch>
						<Route path="/login" render={() => <Login />} />
						<Route path="/" render={() => <MainPage />} />
						<Route path="*" render={() => <div>404 NOT FOUND</div>} />
					</Switch>
				</div>
			</div>
		);
	}
}


export default App;
