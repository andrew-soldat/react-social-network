import './App.css';
import React, { Suspense } from 'react';
import NavBar from './components/NavBar/NavBar';
import ProfileContainer from './components/Profile/ProfileContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Setting from './components/Setting/Setting';
import Login from './components/Login/Login';
import { HashRouter, Route, Redirect, withRouter, Switch } from 'react-router-dom';
import HeaderContainer from './components/Header/HeaderContainer';
import { Provider, connect } from 'react-redux';
import { initializeApp } from './Redux/app-reducer';
import Preloader from './components/common/Preloader';
import { compose } from 'redux';
import store from './Redux/redux-store';
import './index.css';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));

class App extends React.Component {
	catchAllUnhandledErrors = (reason, promise) => {
		console.log(reason)
	}

	componentDidMount() {
		this.props.initializeApp();

		window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors); 
   }

	componentWillUnmount() {
		window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors); 
	}

	render () {
		// if (!this.props.initialized) {
		// 	return <Preloader />
		// }
		
		return (
			<div className="wrapper">
				<HeaderContainer />
				<NavBar />
				<div className="wrapper-content">
					<Switch>
						<Route exact path="/" render={() => <Redirect to={"/profile"} />}/>
						<Route path="/profile/:userId?" render={() => <ProfileContainer />}/>
						<Route path="/dialogs" render={() =>  <Suspense fallback={<div>Загрузка...</div>}><DialogsContainer /></Suspense>}/>											
						<Route path="/users" render={() => <Suspense fallback={<div>Загрузка...</div>}><UsersContainer /></Suspense>}/>
						<Route path="/news" render={() => <News />}/>
						<Route path="/music" render={() => <Music />}/>
						<Route path="/setting" render={() => <Setting />}/>
						<Route path="/login" render={() => <Login />}/>
						<Route path="*" render={() => <div className="page404">404 NOT FOUND</div>}/>
					</Switch>
				</div>
			</div>
		)
	} 
}

const mapStateToProps = (state) => ({
	initialized: state.app.initialized
});

const AppContainer = /*compose(withRouter,*/ connect(mapStateToProps, { initializeApp })(App)/*)*/;

const ReactSocialNetwork = (props) => {
	return <HashRouter>
				<Provider store={store}>
					<AppContainer />
				</Provider>
			</HashRouter>
}

export default ReactSocialNetwork;