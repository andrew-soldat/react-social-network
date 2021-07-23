import './App.css';
import React, { Suspense } from 'react';
import NavBar from './components/NavBar/NavBar';
import ProfileContainer from './components/Profile/ProfileContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Setting from './components/Setting/Setting';
import Login from './components/Login/Login';
import { Route, withRouter } from 'react-router-dom';
import HeaderContainer from './components/Header/HeaderContainer';
import { connect } from 'react-redux';
import { initializeApp } from './Redux/app-reducer';
import Preloader from './components/common/Preloader';
import { compose } from 'redux';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));

class App extends React.Component {
	componentDidMount() {
		this.props.initializeApp();
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
					<Route path="/profile/:userId?" render={() => <ProfileContainer />}/>
					<Route path="/dialogs" render={() =>  <Suspense fallback={<div>Загрузка...</div>}><DialogsContainer /></Suspense>}/>											
					<Route path="/users" render={() => <Suspense fallback={<div>Загрузка...</div>}><UsersContainer /></Suspense>}/>
					<Route path="/news" render={() => <News />}/>
					<Route path="/music" render={() => <Music />}/>
					<Route path="/setting" render={() => <Setting />}/>
					<Route path="/login" render={() => <Login />}/>
				</div>
			</div>
		)
	} 
}

let mapStateToProps = (state) => ({
	initialized: state.app.initialized
});

export default /*compose(withRouter,*/ connect(mapStateToProps, { initializeApp })(App)/*)*/;
