import {usersAPI, profileAPI, ResultCodesEnum} from '../api/api';
import {FormAction, stopSubmit} from 'redux-form';
import { nanoid } from 'nanoid';
import {PhotosType, PostsDataType, ProfileType} from "../types/types";
import {ThunkAction} from "redux-thunk";
import {AppStateStore} from "./redux-store";
import {Dispatch} from "redux";

const ADD_POST = 'ADD-POST',
   DELETE_POST = 'DELETE-POST',
   SET_USER_PROFILE = 'SET_USER_PROFILE',
   SET_STATUS = 'SET_STATUS',
   SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

let initialState = {
   postsData: [
      { post: 'It is my first post', id: '1' },
      { post: 'Hi', id: '2' },
      { post: 'Yo', id: '30' },
      { post: 'Good!', id: '4' },
      { post: 'No', id: '5' },
   ] as Array<PostsDataType>,
	profile: null as ProfileType | null,
	status: ""
};

const profileReducer = (state = initialState, action: ActionsType) => {
   switch (action.type) {
      case ADD_POST:
         let newPost = {
            post: action.newPostText,
            id: nanoid(),
         };

         return {
            ...state,
            postsData: [...state.postsData, newPost],
         };

      case DELETE_POST:
         return {
            ...state,
            postsData: [
               ...state.postsData.filter((p) => p.id !== action.postId),
            ],
         };

      case SET_USER_PROFILE:
         return {
            ...state,
            profile: action.profile,
         };

      case SET_STATUS:
         return {
            ...state,
            status: action.status,
         };

      case SAVE_PHOTO_SUCCESS:
         return {
            ...state,
            profile: { ...state.profile, photos: action.photos, yyy: '654'} as ProfileType
         };

      default:
         return state;
   }
};

type ActionsType = AddPostActionType | DeletePostActionType | SetUserProfileActionType | SetStatusActionType |
    SavePhotoSuccessActionType

type AddPostActionType = {
    type: typeof ADD_POST
    newPostText: string
}
export const addPostActionCreator = (newPostText: string): AddPostActionType => ({ type: ADD_POST, newPostText });
type DeletePostActionType = {
    type: typeof DELETE_POST
    postId: string
}
export const deletePostActionCreator = (postId: string): DeletePostActionType => ({ type: DELETE_POST, postId });
type SetUserProfileActionType = {
    type: typeof SET_USER_PROFILE
    profile: ProfileType
}
export const setUserProfile = (profile: ProfileType): SetUserProfileActionType => ({ type: SET_USER_PROFILE, profile });
type SetStatusActionType = {
    type: typeof SET_STATUS
    status: string
}
export const setStatus = (status: string): SetStatusActionType => ({ type: SET_STATUS, status });
type SavePhotoSuccessActionType = {
    type: typeof SAVE_PHOTO_SUCCESS
    photos: PhotosType
}
export const savePhotoSuccess = (photos: PhotosType): SavePhotoSuccessActionType => ({ type: SAVE_PHOTO_SUCCESS, photos });

type DispatchType = Dispatch<ActionsType>
type ThunkType = ThunkAction<void, AppStateStore, unknown, ActionsType | FormAction>

export const getUserProfileThunk = (userId: number): ThunkType => async (dispatch) => {
	const userProfileData = await usersAPI.getProfile(userId);
    dispatch(setUserProfile(userProfileData));
}

export const getStatusThunk = (userId: number): ThunkType => async (dispatch) => {
	const statusData = await profileAPI.getStatus(userId);

	dispatch(setStatus(statusData));
}

export const updateStatusThunk = (status: string): ThunkType => async (dispatch) => {
    const updateStatusData = await profileAPI.updateStatus(status);

    if (updateStatusData.resultCode === ResultCodesEnum.Success) {
        dispatch(setStatus(status));
    }
}

export const savePhoto = (file: string): ThunkType => async (dispatch) => {
	const savePhotoData = await profileAPI.savePhoto(file);

	if (savePhotoData.resultCode === ResultCodesEnum.Success) {
		dispatch(savePhotoSuccess(savePhotoData.data));
	}
}

export const saveProfile = (profile: ProfileType): ThunkType => async (dispatch, getState) => {
	const userId = getState().auth.userId;
	const profileData = await profileAPI.saveProfile(profile);
	if (profileData.resultCode === ResultCodesEnum.Success) {
        if (userId != null) {
		    dispatch(getUserProfileThunk(userId));
        } else {
            throw new Error("userId can't be null")
        }
	} else {
		let message =
            profileData.messages.length > 0
				? profileData.messages[0]
				: 'Some error';
		dispatch(stopSubmit('edit-profile', { _error: message }));
		return Promise.reject(message)
	}
}

export default profileReducer;
