import React from 'react';
import {
   follow,
   unfollow,
	toggleFollowingProgress,
	getUsersThunk,
	onPageChangeThunk,
} from '../../Redux/users-reducer';
import { connect } from 'react-redux';
import Users from './Users';
import Preloader from '../common/Preloader';
import { compose } from 'redux';
import { getUsers, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress, getIsAuth } from './../../Redux/users-selectors';

class UsersContainer extends React.Component {
   componentDidMount() {
		this.props.getUsersThunk(this.props.currentPage, this.props.pageSize);
   }

   onPageChanged = (pageNumber) => {
		this.props.onPageChangeThunk(pageNumber, this.props.pageSize);
   };

   render() {
      return (
         <>
			{this.props.isFetching ? <Preloader /> : null}
            <Users
               users={this.props.users}
               totalUsersCount={this.props.totalUsersCount}
               pageSize={this.props.pageSize}
               currentPage={this.props.currentPage}
               onPageChanged={this.onPageChanged}
               follow={this.props.follow}
               unfollow={this.props.unfollow}
					followingInProgress={this.props.followingInProgress}
            />
         </>
      );
   }
}

let mapStateToProps = (state) => {
   return {
      users: getUsers(state),
      pageSize: getPageSize(state),
      totalUsersCount: getTotalUsersCount(state),
      currentPage: getCurrentPage(state),
      isFetching: getIsFetching(state),
		followingInProgress: getFollowingInProgress(state),
		isAuth: getIsAuth(state)
   };
};

export default compose(
	connect(mapStateToProps, {follow, unfollow, toggleFollowingProgress, getUsersThunk, onPageChangeThunk}),
	)(UsersContainer);
