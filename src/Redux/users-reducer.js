import { usersAPI } from '../api/api';
import { updateObjectInArray } from '../utilities/object-helpers';

const FOLLOW = 'FOLLOW',
   UNFOLLOW = 'UNFOLLOW',
   SET_USERS = 'SET_USERS',
   SET_CURRENT_PAGE = 'SET_CURRENT_PAGE',
   SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT',
   TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING',
   TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
   users: [],
   pageSize: 4,
   totalUsersCount: 0,
   currentPage: 1,
   isFetching: true,
   followingInProgress: [],
	fake: 10
};

const usersReducer = (state = initialState, action) => {
   switch (action.type) {
      case FOLLOW:
         return {
            ...state,
            users: updateObjectInArray(state.users, action.userId, "id", { followed: true })
         };

      case UNFOLLOW:
         return {
            ...state,
            users: updateObjectInArray(state.users, action.userId, "id", { followed: false })
         };

      case SET_USERS:
         return { ...state, users: action.users };

      case SET_CURRENT_PAGE:
         return { ...state, currentPage: action.currentPage };

      case SET_TOTAL_USERS_COUNT:
         return { ...state, totalUsersCount: action.count };

      case TOGGLE_IS_FETCHING:
         return { ...state, isFetching: action.isFetching };

      case TOGGLE_IS_FOLLOWING_PROGRESS:
         return {
            ...state,
            followingInProgress: action.isFetching
               ? [...state.followingInProgress, action.userId]
               : state.followingInProgress.filter((id) => id != action.userId),
         };

      default:
         return state;
   }
};

export const followSuccess = (userId) => ({ type: 'FOLLOW', userId: userId });
export const unfollowSuccess = (userId) => ({
   type: 'UNFOLLOW',
   userId: userId,
});
export const setUsers = (users) => ({ type: 'SET_USERS', users });
export const setCurrentPage = (currentPage) => ({
   type: 'SET_CURRENT_PAGE',
   currentPage,
});
export const setTotalUsersCount = (totalUsersCount) => ({
   type: 'SET_TOTAL_USERS_COUNT',
   count: totalUsersCount,
});
export const toggleIsFetching = (isFetching) => ({
   type: 'TOGGLE_IS_FETCHING',
   isFetching,
});
export const toggleFollowingProgress = (isFetching, userId) => ({
   type: 'TOGGLE_IS_FOLLOWING_PROGRESS',
   isFetching,
   userId,
});

export const getUsersThunk = (currentPage, pageSize) => async (dispatch) => {
	dispatch(toggleIsFetching(true));
	dispatch(setCurrentPage(currentPage));
	const data = await usersAPI.getUsers(currentPage, pageSize);

	dispatch(toggleIsFetching(false));
	dispatch(setUsers(data.items));
	dispatch(setTotalUsersCount(data.totalCount));
};

export const onPageChangeThunk = (pageNumber, pageSize) => async (dispatch) => {
	dispatch(toggleIsFetching(true));
	dispatch(setCurrentPage(pageNumber));
	const response = await usersAPI.getUsers(pageNumber, pageSize);

	dispatch(toggleIsFetching(false));
	dispatch(setUsers(response.items));
	dispatch(setTotalUsersCount(response.totalCount));
};

const followUnfollowSlow = async ( dispatch, userId, apiMethod, actionCreator) => {
   dispatch(toggleFollowingProgress(true, userId));
   const response = await apiMethod(userId);
   if (response.resultCode === 0) {
      dispatch(actionCreator(userId));
   }
   dispatch(toggleFollowingProgress(false, userId));
};

export const follow = (userId) => async (dispatch) => {
   followUnfollowSlow(
      dispatch,
      userId,
      usersAPI.getUnfollow.bind(usersAPI),
      followSuccess
   );
};

export const unfollow = (userId) => async (dispatch) => {
   followUnfollowSlow(
      dispatch,
      userId,
      usersAPI.getFollow.bind(usersAPI),
      unfollowSuccess
   );
};

export default usersReducer;
