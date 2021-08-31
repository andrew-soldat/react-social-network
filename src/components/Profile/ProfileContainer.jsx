import React from 'react';
import Profile from './Profile.jsx';
import { connect } from 'react-redux';
import { getUserProfileThunk, getStatusThunk, updateStatusThunk, savePhoto, saveProfile} from './../../Redux/profile-reducer';
import { withRouter } from 'react-router';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
	refreshProfile() {
		let userId = this.props.match.params.userId;
		if (!userId) {
			userId = this.props.autorizedUserId;
			if (!userId) {
				this.props.history.push("/login");
			}
		}
		this.props.getUserProfileThunk(userId);
		this.props.getStatusThunk(userId);
	}

	componentDidMount() {
		this.refreshProfile();
   }

	componentDidUpdate(prevProps, prevState, snapshot) {
		if (this.props.match.params.userId !== prevProps.match.params.userId) { 
         this.refreshProfile();
      }
	}

   render() {		
      return (
         <Profile
            {...this.props}
            isOwner={!this.props.match.params.userId}
            profile={this.props.profile}
            status={this.props.status || '--'}
            updateStatus={this.props.updateStatusThunk}
				savePhoto={this.props.savePhoto}
				saveProfile={this.props.saveProfile}
         />
      );
   }
}

let mapStateToProps = (state) => {
	return {
		profile: state.profilePage.profile,
		status: state.profilePage.status,
		autorizedUserId: state.auth.userId,
		isAuth: state.auth.isAuth
   };
};

export default compose(
   connect(mapStateToProps, { getUserProfileThunk, getStatusThunk, updateStatusThunk, savePhoto, saveProfile }),
   withRouter
)(ProfileContainer);



