import { usersAPI } from '../api/api';
import { updateObjectInArray } from '../utilities/object-helpers';
import {UsersType} from "../types/types";
import {ThunkAction} from "redux-thunk";
import {AppStateStore} from "./redux-store";
import {Dispatch} from "redux";


const FOLLOW = 'FOLLOW',
      UNFOLLOW = 'UNFOLLOW',
      SET_USERS = 'SET_USERS',
      SET_CURRENT_PAGE = 'SET_CURRENT_PAGE',
      SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT',
      TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING',
      TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
   users: [] as Array<UsersType>,
   pageSize: 4,
   totalUsersCount: 0,
   currentPage: 1,
   followingInProgress: [] as Array<number>, // array of users ids
   isFetching: true,
};

type InitialState = typeof initialState;

const usersReducer = (state = initialState, action: ActionsType): InitialState => {
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
         return { ...state, totalUsersCount: action.totalUsersCount };

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

type ActionsType = FollowSuccessActionType | UnfollowSuccessActionType | SetUsersActionType |
    SetCurrentPageActionType | SetTotalUsersCountActionType | ToggleIsFetchingActionType |
    ToggleFollowingProgressActionType

type FollowSuccessActionType = {
   type: typeof FOLLOW
   userId: number
}
export const followSuccess = (userId: number): FollowSuccessActionType => ({ type: FOLLOW, userId });
type UnfollowSuccessActionType = {
   type: typeof UNFOLLOW
   userId: number
}
export const unfollowSuccess = (userId: number): UnfollowSuccessActionType => ({ type: UNFOLLOW, userId });
type SetUsersActionType = {
   type: typeof SET_USERS
   users: Array<UsersType>
}
export const setUsers = (users: Array<UsersType>): SetUsersActionType => ({ type: SET_USERS, users });
type SetCurrentPageActionType = {
   type: typeof SET_CURRENT_PAGE
   currentPage: number
}
export const setCurrentPage = (currentPage: number): SetCurrentPageActionType => ({ type: SET_CURRENT_PAGE, currentPage });
type SetTotalUsersCountActionType = {
   type: typeof SET_TOTAL_USERS_COUNT
   totalUsersCount: number
}
export const setTotalUsersCount = (totalUsersCount: number): SetTotalUsersCountActionType => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount });
type ToggleIsFetchingActionType = {
   type: typeof TOGGLE_IS_FETCHING
   isFetching: boolean
}
export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingActionType => ({ type: TOGGLE_IS_FETCHING, isFetching });
type ToggleFollowingProgressActionType = {
   type: typeof TOGGLE_IS_FOLLOWING_PROGRESS
   isFetching: boolean
   userId: number
}
export const toggleFollowingProgress = (isFetching: boolean, userId: number): ToggleFollowingProgressActionType => ({
   type: TOGGLE_IS_FOLLOWING_PROGRESS,
   isFetching,
   userId,
});

type DispatchType = Dispatch<ActionsType>
type ThunkType = ThunkAction<void, AppStateStore, unknown, ActionsType>

export const getUsersThunk = (currentPage: number, pageSize: number): ThunkType => async (dispatch) => {
	dispatch(toggleIsFetching(true));
	dispatch(setCurrentPage(currentPage));
	const usersData = await usersAPI.getUsers(currentPage, pageSize);

	dispatch(toggleIsFetching(false));
	dispatch(setUsers(usersData.items));
	dispatch(setTotalUsersCount(usersData.totalCount));
};

export const onPageChangeThunk = (pageNumber: number, pageSize: number): ThunkType => async (dispatch) => {
	dispatch(toggleIsFetching(true));
	dispatch(setCurrentPage(pageNumber));
	const usersData = await usersAPI.getUsers(pageNumber, pageSize);

	dispatch(toggleIsFetching(false));
	dispatch(setUsers(usersData.items));
	dispatch(setTotalUsersCount(usersData.totalCount));
};

const _followUnfollowSlow = async ( dispatch: DispatchType, userId: number, apiMethod: any, actionCreator: (userId: number) => FollowSuccessActionType | UnfollowSuccessActionType) => {
   dispatch(toggleFollowingProgress(true, userId));
   const response = await apiMethod(userId);
   if (response.resultCode === 0) {
      dispatch(actionCreator(userId));
   }
   dispatch(toggleFollowingProgress(false, userId));
};

export const follow = (userId: number): ThunkType => async (dispatch) => {
   _followUnfollowSlow(
      dispatch,
      userId,
      usersAPI.getUnfollow.bind(usersAPI),
      followSuccess
   );
};

export const unfollow = (userId: number): ThunkType => async (dispatch) => {
   _followUnfollowSlow(
      dispatch,
      userId,
      usersAPI.getFollow.bind(usersAPI),
      unfollowSuccess
   );
};

export default usersReducer;
