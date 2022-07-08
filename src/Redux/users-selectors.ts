import { createSelector } from 'reselect'
import {AppStateStore} from "./redux-store";

const getUsersSuperSelector = (state: AppStateStore) => {
	return state.usersPage.users;
}
export const getUsers = createSelector(getUsersSuperSelector,
   (users) => {
      return users.filter((u) => true);
});
export const getPageSize = (state: AppStateStore) => {
	return state.usersPage.pageSize;
}
export const getTotalUsersCount = (state: AppStateStore) => {
	return state.usersPage.totalUsersCount;
}
export const getCurrentPage = (state: AppStateStore) => {
	return state.usersPage.currentPage;
}
export const getIsFetching = (state: AppStateStore) => {
	return state.usersPage.isFetching;
}
export const getFollowingInProgress = (state: AppStateStore) => {
	return state.usersPage.followingInProgress;
}
export const getIsAuth = (state: AppStateStore) => {
	return state.auth.isAuth;
}