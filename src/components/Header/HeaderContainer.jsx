import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { logout } from '../../Redux/auth-reducer';

const HeaderContainer = (logout) => {

	return <Header logout={logout} />
}

// class HeaderContainer extends React.Component {
// 	componentDidMount() {
// 		this.props.logout();
//    }
//
//    render() {
//       return <Header {...this.props} />
// 	}
// }

let mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth,
	login: state.auth.login,
});

export default connect(mapStateToProps, { logout })(HeaderContainer);