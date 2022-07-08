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
import { getUsers, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress, getIsAuth } from '../../Redux/users-selectors';
import {UsersType} from "../../types/types";
import {AppStateStore} from "../../Redux/redux-store";


type MapStatePropsType = {
    users: Array<UsersType>
    totalUsersCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}

type MapDispatchPropsType = {
    onPageChangeThunk: (pageNumber: number, pageSize: number) => void
    getUsersThunk: (currentPage: number, pageSize: number) => void
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    pageNumber: number

}

type PropsType = MapStatePropsType & MapDispatchPropsType

class UsersContainer extends React.Component<PropsType> {
   componentDidMount() {
		this.props.getUsersThunk(this.props.currentPage, this.props.pageSize);
   }

   onPageChanged = (pageNumber: number) => {
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

let mapStateToProps = (state: AppStateStore): MapStatePropsType => {
   return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
   };
};

// @ts-ignore
export default compose(	connect<MapStatePropsType, MapDispatchPropsType, AppStateStore>(mapStateToProps, {follow, unfollow, getUsersThunk, onPageChangeThunk}), )(UsersContainer);
