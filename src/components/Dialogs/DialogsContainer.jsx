import React from 'react';
import {
   sendMessageActionCreator
} from '../../Redux/dialogs-reducer'
import {connect} from 'react-redux';
import Dialogs from './Dialogs'
import { withAuthRedirect } from '../../hoc/withAuthRedirect.js';
import { compose } from 'redux';

let mapStateToProps = (state) => {
	return {
		dialogsPage: state.dialogsPage
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		sendMessage: (newMessage) => {
			dispatch(sendMessageActionCreator(newMessage));
		}
	}
}

export default compose(
	connect(mapStateToProps, mapDispatchToProps), withAuthRedirect
	)(Dialogs);

